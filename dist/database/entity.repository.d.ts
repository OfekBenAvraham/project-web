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
/// <reference types="mongoose/types/inferschematype" />
import { FilterQuery, HydratedDocument, Model, ProjectionType, QueryOptions, UpdateQuery } from 'mongoose';
export declare abstract class EntityRepository<T extends HydratedDocument<any>> {
    protected readonly entityModel: Model<T>;
    constructor(entityModel: Model<T>);
    create(createEntityData: unknown): Promise<T>;
    find(entityFilterQuery?: FilterQuery<T>, projection?: ProjectionType<T>, options?: QueryOptions<T>): Promise<T[] | null>;
    findOne(entityFilterQuery?: FilterQuery<T>, projection?: ProjectionType<T>, options?: QueryOptions<T>): Promise<T | null>;
    findOneAndUpdate(entityFilterQuery: FilterQuery<T>, updateEntityDate: UpdateQuery<unknown>, options?: QueryOptions<T>): Promise<T | null>;
    findOneAndDelete(entityFilterQuery?: FilterQuery<T>, options?: QueryOptions<T>): Promise<T | null>;
    exists(entityFilterQuery?: FilterQuery<T>): import("mongoose").Query<{
        _id: import("mongoose").InferId<T>;
    }, import("mongoose").IfAny<T, any, import("mongoose").Document<unknown, {}, T> & import("mongoose").Require_id<T>>, {}, T, "findOne">;
}
