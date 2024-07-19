//login is working properly but reset m error
/*
import { User } from "@/app/models/User";
import { sendPasswordResetEmail } from "@/app/register/email";
import crypto from "crypto";
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
  const { email } = await req.json();

  try {
    await connectToDatabase();
    const user = await User.findOne({ email });
    if (!user) {
      return new Response(JSON.stringify({ message: 'Email not registered' }), { status: 404 });
    }

    const token = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;
    await sendPasswordResetEmail(email, resetUrl);

    return new Response(JSON.stringify({ message: 'Password reset email sent' }), { status: 200 });
  } catch (error) {
    console.error('Error during password reset request', error);
    return new Response(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
  }
}
*/

//again correction
/*import { User } from "@/app/models/User";
import { sendPasswordResetEmail } from "@/app/api/register/email";

import crypto from "crypto";
import mongoose from "mongoose";

export async function POST(req) {
    const { email } = await req.json();
    await mongoose.connect(process.env.MONGO_URI);

    const user = await User.findOne({ email });
    if (!user) {
        return new Response(JSON.stringify({ message: 'Email not found' }), { status: 404 });
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    const resetUrl = `${process.env.NEXTAUTH_URL}/reset-password?token=${resetToken}`;
    await sendPasswordResetEmail(email, resetUrl);

    return new Response(JSON.stringify({ message: 'Password reset email sent' }), { status: 200 });
}
*/
// src/app/api/password/reset/route.js

// src/app/api/password/reset/route.js

import { User } from "@/app/models/User";
import { sendPasswordResetEmail } from "@/app/api/register/email";
import crypto from "crypto";
import mongoose from "mongoose";

export async function POST(req) {
    const { email } = await req.json();
    
    if (!email) {
        return new Response(JSON.stringify({ error: "Email is required" }), { status: 400 });
    }

    const user = await User.findOne({ email });
    if (!user) {
        return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
    }

    const token = crypto.randomBytes(32).toString("hex");
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

    await user.save();

    const resetUrl = `http://yourdomain.com/reset-password?token=${token}`;

    try {
        await sendPasswordResetEmail(user.email, resetUrl);
        return new Response(JSON.stringify({ message: "Password reset email sent" }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: "Error sending email" }), { status: 500 });
    }
}
