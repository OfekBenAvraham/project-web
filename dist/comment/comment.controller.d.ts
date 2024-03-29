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
import { commentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { JwtService } from '@nestjs/jwt';
export declare class CommentController {
    private readonly commentService;
    private jwtService;
    constructor(commentService: commentService, jwtService: JwtService);
    create(createCommentDto: CreateCommentDto, req: any): Promise<import("mongoose").Document<unknown, {}, import("./entities/comment.entity").Comment> & import("./entities/comment.entity").Comment & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./entities/comment.entity").Comment> & import("./entities/comment.entity").Comment & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
    findByPostId(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./entities/comment.entity").Comment> & import("./entities/comment.entity").Comment & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[]>;
}
