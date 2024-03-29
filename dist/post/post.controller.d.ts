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
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PostByCategoryDto } from './dto/post-by-category.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(createUserDto: CreatePostDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/post.entity").Post> & import("./entities/post.entity").Post & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./entities/post.entity").Post> & import("./entities/post.entity").Post & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    findByCategory(postByCategoryDto: PostByCategoryDto): Promise<(import("mongoose").Document<unknown, {}, import("./entities/post.entity").Post> & import("./entities/post.entity").Post & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    findById(id: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/post.entity").Post> & import("./entities/post.entity").Post & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
