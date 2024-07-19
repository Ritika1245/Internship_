import { User } from "@/app/models/User";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected');
  }
};

export async function POST(req) {
  const { token, newPassword } = await req.json();

  try {
    await connectToDatabase();
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return new Response(JSON.stringify({ message: 'Password reset token is invalid or has expired' }), { status: 400 });
    }

    user.password = bcrypt.hashSync(newPassword, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    return new Response(JSON.stringify({ message: 'Password updated successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error during password update', error);
    return new Response(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
  }
}
