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
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login.dto';
import { AuthService } from '../auth/auth.service';
import { JwtService } from '@nestjs/jwt';
export declare class UserController {
    private readonly userService;
    private readonly authService;
    private readonly jwtService;
    constructor(userService: UserService, authService: AuthService, jwtService: JwtService);
    create(createUserDto: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/user.entity").User> & import("./entities/user.entity").User & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    login(loginUserDto: LoginUserDto): Promise<{
        access_token: string;
    }>;
}
