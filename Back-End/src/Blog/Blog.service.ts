import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog } from './Blog.model';

@Injectable()
export class BlogService {
  private id = -1;
  constructor(@InjectModel('Blog') private readonly BlogModel: Model<Blog>) {}

  async insertBlog(title: string, body: string, author: string) {
    var lastBlog: Array<Blog> = await this.BlogModel.find()
      .sort({ _id: -1 })
      .limit(1);
    if (this.id === -1 && !lastBlog.length) {
      this.id = 0;
    } else this.id = Number(lastBlog[0].id) + 1;
    console.log(lastBlog);
    console.log(this.id);

    const newBlog = new this.BlogModel({ _id: this.id, title, body, author });
    var blog: any = await newBlog.save().catch((e) => {
      console.log('error :', e);
      return 'faild';
    });
    this.id++;
    return 'succes';
  }

  async	getAllBlog() {
	let blogs : any = await this.BlogModel.find();
    return blogs;
  }

  async getBlogById(id :number)
  {
	let blog : any = await this.BlogModel.findOne().where({_id : id.toString()})
	return blog;
  }
}
