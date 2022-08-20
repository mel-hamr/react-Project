import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { BlogService } from './Blog.service';

@Controller('Blogs')
export class BlogController {
  constructor(private readonly BlogServ: BlogService) {}
  @Get()
  async getAllBlogs() {
    return this.BlogServ.getAllBlog();
  }

  @Post('create')
  async createBlog(@Body() body) {
    const result = await this.BlogServ.insertBlog(
      body.title,
      body.body,
      body.author,
    );
    return result;
  }
  @Post('delete')
  async deleteBlog(@Body() body) {
    const result = await this.BlogServ.deleteBlog(body.id);
    return 'delete';
  }
  @Get('/:id')
  async getProduct(
    @Param('id') id, // @Post('getBlogById')
  ) // async getBlogById(@Req() req)
  {
  
      let blog = await this.BlogServ.getBlogById(id);
      return blog;
   
  }
}
