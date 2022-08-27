import { UserService } from './User.service';
export declare class UserController {
    private readonly userServ;
    constructor(userServ: UserService);
    getAllBlogs(): Promise<void>;
    createBlog(body: any): Promise<void>;
    deleteBlog(body: any): Promise<void>;
    getProduct(id: any): Promise<void>;
}
