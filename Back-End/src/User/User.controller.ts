import { BadRequestException, Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { UserService } from './User.service';
import * as bcrypt from 'bcrypt';

@Controller('user')
export class UserController {
  constructor(private readonly userServ: UserService) {}
  @Get()
  async getAllBlogs() {}

  @Post('create')
  async createBlog(@Body() body) {
	let user  = await this.userServ.createUser(body);
	return user
  }
  @Post('delete')
  async deleteBlog(@Body() body) {}
  @Get('/:id')
  async getProduct(@Param('id') id) {}

  @Post('login')
  async handleLogin(@Body() body)
  {
	let user = await this.userServ.getUserBy({userName : body.userName})

	if(!user)
		throw new BadRequestException();
	if(! await bcrypt.compare(body.password , user.password))
		throw new BadRequestException();
	
	console.log(user)
	return user
  }
}
