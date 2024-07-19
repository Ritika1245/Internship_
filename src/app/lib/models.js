import bcrypt from 'bcryptjs';
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