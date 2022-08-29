import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { check } from 'prettier';
import { User } from './User.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

	async createUser(data: any)
	{
		let checker :any 
		checker = await this.userModel.findOne({email : data.email})
		console.log(data)
		console.log("===========");
		console.log("checker ==>\n" , checker)
		
	}

}
