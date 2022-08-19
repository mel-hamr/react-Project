import { Model } from 'mongoose';
import { Blog } from './Blog.model';
export declare class BlogService {
    private readonly BlogModel;
    private id;
    constructor(BlogModel: Model<Blog>);
    insertBlog(title: string, body: string, author: string): Promise<string>;
    getAllBlog(): Promise<any>;
    getBlogById(id: number): Promise<any>;
}
