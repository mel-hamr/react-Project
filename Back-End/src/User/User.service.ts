import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { check } from 'prettier';
import { User, UserSchema } from './User.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(data: any) {
		let checker: any;
		checker = await this.userModel.findOne({
		$or: [{ email: data.email }, { userName: data.userName }],
		});

		if (checker !== null)
			throw new HttpException(
				'UserName or Email already exists',
				HttpStatus.BAD_REQUEST,
			);
		else {
			let hashPass = await bcrypt.hash(data.password, 12);
			let newUser = new this.userModel({
				userName: data.userName,
				email: data.email,
				password: hashPass,
			});
			await newUser.save();
		}
  	}
	
	async getUserBy(condition : any )
	{
		console.log(condition)
		return await this.userModel.findOne(condition);
	}
}
