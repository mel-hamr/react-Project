import { Model } from 'mongoose';
import { User } from './User.model';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    createUser(data: any): Promise<void>;
}
