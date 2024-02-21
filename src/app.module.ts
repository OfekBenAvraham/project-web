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
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { CommandController } from './command/command.controller';
import { CommandService } from './command/command.service';
import { CommandRepository } from './command/command.repository';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/maker-mingle'),
    MongooseModule.forFeature(forFeatureDb),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'images'),
      serveRoot: '/images',
    }),
  ],
  controllers: [
    AppController,
    UserController,
    CategoryController,
    PostController,
    CommandController,
  ],
  providers: [
    AppService,
    UserService,
    PostService,
    CategoryService,
    CommandService,
    UserRepository,
    PostRepository,
    CategoryRepository,
    CommandRepository,
  ],
  exports: [UserService, CategoryService, PostService, CommandService],
})
export class AppModule {}
