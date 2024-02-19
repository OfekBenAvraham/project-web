import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import forFeatureDb from './db/for-feature.db';
import { UserRepository } from './user/user.repository';
import { CategoryController } from './category/category.controller';
import { PostController } from './post/post.controller';
import { PostRepository } from './post/post.repository';
import { PostService } from './post/post.service';
import { CategoryRepository } from './category/category.repository';
import { CategoryService } from './category/category.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017'),
    MongooseModule.forFeature(forFeatureDb),
  ],
  controllers: [
    AppController,
    UserController,
    CategoryController,
    PostController,
  ],
  providers: [
    AppService,
    UserService,
    UserRepository,
    PostRepository,
    PostService,
    CategoryRepository,
    CategoryService,
  ],
  exports: [UserService, CategoryService, PostService],
})
export class AppModule {}
