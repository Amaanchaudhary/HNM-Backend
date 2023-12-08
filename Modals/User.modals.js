import mongoose, { Schema, Mongoose } from "mongoose";

const user = new Schema({
    name : String,
    email : String,
    password : String
})

export default mongoose.model("H&M_User", user)