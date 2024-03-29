"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const mongoose_1 = require("@nestjs/mongoose");
const user_controller_1 = require("./user/user.controller");
const user_service_1 = require("./user/user.service");
const for_feature_db_1 = require("./db/for-feature.db");
const user_repository_1 = require("./user/user.repository");
const category_controller_1 = require("./category/category.controller");
const post_controller_1 = require("./post/post.controller");
const post_repository_1 = require("./post/post.repository");
const post_service_1 = require("./post/post.service");
const category_repository_1 = require("./category/category.repository");
const category_service_1 = require("./category/category.service");
const serve_static_1 = require("@nestjs/serve-static");
const path = require("path");
const comment_controller_1 = require("./comment/comment.controller");
const comment_service_1 = require("./comment/comment.service");
const comment_repository_1 = require("./comment/comment.repository");
const jwt_1 = require("@nestjs/jwt");
const auth_service_1 = require("./auth/auth.service");
const jwt_strategy_1 = require("./auth/jwt.strategy");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://guypar1997:gp123@project-web.8kaignp.mongodb.net/'),
            mongoose_1.MongooseModule.forFeature(for_feature_db_1.default),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path.join(__dirname, '..', 'images'),
                serveRoot: '/images',
            }),
            jwt_1.JwtModule.register({
                secret: '2cf63dde04e8646116a44522772515f66a1aae463d4a84982239fed16e49655b21a890cb5fefd866e9e73e901a199955468dc3517d4184bce90dd2de90748316',
                signOptions: { expiresIn: '60s' },
            }),
        ],
        controllers: [
            comment_controller_1.CommentController,
            app_controller_1.AppController,
            user_controller_1.UserController,
            category_controller_1.CategoryController,
            post_controller_1.PostController,
        ],
        providers: [
            comment_service_1.CommentService,
            comment_repository_1.CommentRepository,
            auth_service_1.AuthService,
            app_service_1.AppService,
            user_service_1.UserService,
            post_service_1.PostService,
            category_service_1.CategoryService,
            user_repository_1.UserRepository,
            post_repository_1.PostRepository,
            category_repository_1.CategoryRepository,
            jwt_strategy_1.JwtStrategy
        ],
        exports: [comment_service_1.CommentService, user_service_1.UserService, category_service_1.CategoryService, post_service_1.PostService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map