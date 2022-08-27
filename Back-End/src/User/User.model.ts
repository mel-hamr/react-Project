import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    userName : {type : String , require : true , unique : true , dropDups : true},
    email : { type: String , required: true , unique : true , dropDups : true},
    password : { type: String , required: true},
    accesToken : { type: String , required: true},
});

export interface User {
    userName : string
    email : string
    password : string
    accesToken : string
}