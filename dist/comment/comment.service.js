"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentService = void 0;
const common_1 = require("@nestjs/common");
const comment_repository_1 = require("./comment.repository");
const post_service_1 = require("../post/post.service");
const user_service_1 = require("../user/user.service");
let commentService = class commentService {
    constructor(commentRepository, postService, userService) {
        this.commentRepository = commentRepository;
        this.postService = postService;
        this.userService = userService;
    }
    async create(createCommentDto, id) {
        let user = await this.userService.findUserById(id);
        if (!user) {
            throw new common_1.HttpException('user not found.', common_1.HttpStatus.NOT_FOUND);
        }
        let post = await this.postService.findOne(createCommentDto.post);
        if (!post) {
            throw new common_1.HttpException('post not found.', common_1.HttpStatus.NOT_FOUND);
        }
        return this.commentRepository.create({ ...createCommentDto, user: id });
    }
    findAll() {
        return this.commentRepository.find();
    }
    findByPostId(id) {
        return this.commentRepository.find({ post: id });
    }
};
exports.commentService = commentService;
exports.commentService = commentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [comment_repository_1.CommentRepository,
        post_service_1.PostService,
        user_service_1.UserService])
], commentService);
//# sourceMappingURL=comment.service.js.map