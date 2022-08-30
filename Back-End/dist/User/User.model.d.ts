import mongoose from "mongoose";
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    email: string;
    password: string;
    userName?: string;
    accesToken?: string;
}>;
export interface User {
    userName: string;
    email: string;
    password: string;
    accesToken: string;
}
