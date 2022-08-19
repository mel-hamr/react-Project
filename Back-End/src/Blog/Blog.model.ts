import mongoose from "mongoose";

export const BlogSchema = new mongoose.Schema({
    _id : {type : Number , require : true},
    title : { type: String , required: true},
    body : { type: String , required: true},
    author : { type: String , required: true},
});

export interface Blog {
    id : string
    title : string
    body : string
    author : string
}