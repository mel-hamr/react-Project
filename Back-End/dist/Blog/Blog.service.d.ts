import { Model } from 'mongoose';
import { Blog } from './Blog.model';
export declare class BlogService {
    private readonly BlogModel;
    private id;
    constructor(BlogModel: Model<Blog>);
    insertBlog(title: string, body: string, author: string): Promise<any>;
    getAllBlog(): Promise<any>;
    deleteBlog(id: number): Promise<import("mongodb").DeleteResult>;
    getBlogById(id: number): Promise<any>;
}
