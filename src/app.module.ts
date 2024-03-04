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
import { CommentController } from './comment/comment.controller';
import { commentService } from './comment/comment.service';
import { CommentRepository } from './comment/comment.repository';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/maker-mingle'),
    MongooseModule.forFeature(forFeatureDb),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'images'),
      serveRoot: '/images',
    }),
    JwtModule.register({
      secret:
        '2cf63dde04e8646116a44522772515f66a1aae463d4a84982239fed16e49655b21a890cb5fefd866e9e73e901a199955468dc3517d4184bce90dd2de90748316',
      signOptions: { expiresIn: '60s' },
    }),
  ],

  controllers: [
    AppController,
    UserController,
    CategoryController,
    PostController,
    CommentController,
  ],
  providers: [
    AuthService,
    AppService,
    UserService,
    PostService,
    CategoryService,
    commentService,
    UserRepository,
    PostRepository,
    CategoryRepository,
    CommentRepository,
  ],
  exports: [UserService, CategoryService, PostService, commentService],
})
export class AppModule {}
