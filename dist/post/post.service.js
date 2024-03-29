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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const post_repository_1 = require("./post.repository");
const category_service_1 = require("../category/category.service");
let PostService = class PostService {
    constructor(postRepository, categoryService) {
        this.postRepository = postRepository;
        this.categoryService = categoryService;
    }
    async create(createPostDto) {
        let category = await this.categoryService.findOne(createPostDto.category);
        if (!category) {
            throw new common_1.HttpException('category not found.', common_1.HttpStatus.NOT_FOUND);
        }
        return this.postRepository.create(createPostDto);
    }
    findAll() {
        return this.postRepository.find({}, {}, { populate: 'category', lean: true });
    }
    findOne(id) {
        let post = this.postRepository.findOne({ _id: id }, {}, { populate: 'category', lean: true });
        if (!post) {
            throw new common_1.HttpException('Post not found.', common_1.HttpStatus.NOT_FOUND);
        }
        return post;
    }
    async findByCategory(postByCategoryDto) {
        const postsWithCategory = await this.postRepository.find({}, {}, {
            populate: { path: 'category', match: { name: postByCategoryDto.name } },
            lean: true,
        });
        const filteredPosts = postsWithCategory.filter((post) => post.category);
        return filteredPosts;
    }
};
exports.PostService = PostService;
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [post_repository_1.PostRepository,
        category_service_1.CategoryService])
], PostService);
//# sourceMappingURL=post.service.js.map