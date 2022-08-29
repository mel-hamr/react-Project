import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { UserService } from './User.service';

@Controller('User')
export class UserController {
  constructor(private readonly userServ: UserService) {}
  @Get()
  async getAllBlogs() {
  }

  @Post('create')
  async createBlog(@Body() body) {
    this.userServ.createUser(body);
    
  }
  @Post('delete')
  async deleteBlog(@Body() body) {
    
  }
  @Get('/:id')
  async getProduct( @Param('id') id) 
  {
  
   
  }
}
