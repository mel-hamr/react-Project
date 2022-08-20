import { BlogService } from './Blog.service';
export declare class BlogController {
    private readonly BlogServ;
    constructor(BlogServ: BlogService);
    getAllBlogs(): Promise<any>;
    createBlog(body: any): Promise<any>;
    deleteBlog(body: any): Promise<string>;
    getProduct(id: any): Promise<any>;
}
