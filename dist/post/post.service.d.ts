/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { PostRepository } from './post.repository';
import { CreatePostDto } from './dto/create-post.dto';
import { PostByCategoryDto } from './dto/post-by-category.dto';
import { CategoryService } from '../category/category.service';
export declare class PostService {
    private readonly postRepository;
    private readonly categoryService;
    constructor(postRepository: PostRepository, categoryService: CategoryService);
    create(createPostDto: CreatePostDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/post.entity").Post> & import("./entities/post.entity").Post & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./entities/post.entity").Post> & import("./entities/post.entity").Post & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/post.entity").Post> & import("./entities/post.entity").Post & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findByCategory(postByCategoryDto: PostByCategoryDto): Promise<(import("mongoose").Document<unknown, {}, import("./entities/post.entity").Post> & import("./entities/post.entity").Post & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
}
