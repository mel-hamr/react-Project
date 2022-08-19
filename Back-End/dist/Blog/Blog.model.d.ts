import mongoose from "mongoose";
export declare const BlogSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    title: string;
    body: string;
    author: string;
    _id?: number;
}>;
export interface Blog {
    id: string;
    title: string;
    body: string;
    author: string;
}
