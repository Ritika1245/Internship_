// correct code
/* import bcrypt from 'bcryptjs';
const { Schema, models, model } = require("mongoose");

const UserSchema = new Schema({
    name:{type:String,required:true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true, validate: pass => {
        if (!pass?.length || pass.length < 5) {
            new Error("Password must be at least 5 or more characters");
        }
    }},
    github:{type:String,required:true,unique:true},
    githubAccessToken:{type:String},
}, { timestamps: true });


UserSchema.post('validate',function (user){
    const notHashedPassword =user.password;
    const salt=bcrypt.genSaltSync(10);
    user.password= bcrypt.hashSync(notHashedPassword,salt);

})

export const User= models?.User || model('User',UserSchema);
*/

//changed code after adding activation link
// src/app/models/User.js

// src/app/models/User.js

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
    unique: true,
    validate: pass => {
      if (!pass?.length || pass.length < 5) {
        throw new Error("Password must be at least 5 or more characters");
      }
    }
  },
  github: { type: String, required: true, unique: true },
  githubAccessToken: { type: String },
  activationToken: { type: String },
  activationTokenExpires: { type: Date },
  active: { type: Boolean, default: false }
}, { timestamps: true });

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
export { User };
