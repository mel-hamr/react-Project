import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './Blog/Blog.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './User/User.module';
@Module({
  imports: [
    BlogModule, UserModule,
    MongooseModule.forRoot(
      'mongodb+srv://Reinhard:mongomongo@cluster0.bncb5ww.mongodb.net/blogData?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
