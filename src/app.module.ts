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
import { CommentService } from './comment/comment.service';
import { CommentRepository } from './comment/comment.repository';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/jwt.strategy';
// check
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://guypar1997:gp123@project-web.8kaignp.mongodb.net/',
    ),
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
    CommentController,
    AppController,
    UserController,
    CategoryController,
    PostController,
  ],
  providers: [
    CommentService,
    CommentRepository,
    AuthService,
    AppService,
    UserService,
    PostService,
    CategoryService,
    UserRepository,
    PostRepository,
    CategoryRepository,
    JwtStrategy
  ],
  exports: [CommentService, UserService, CategoryService, PostService],
})
export class AppModule {}
