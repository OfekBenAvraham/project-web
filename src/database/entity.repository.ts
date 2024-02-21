import {
  FilterQuery,
  HydratedDocument,
  Model,
  ProjectionType,
  QueryOptions,
  UpdateQuery,
} from 'mongoose';

export abstract class EntityRepository<T extends HydratedDocument<any>> {
  constructor(protected readonly entityModel: Model<T>) {}

  create(createEntityData: unknown): Promise<T> {
    return this.entityModel.create(createEntityData);
  }

  find(
    entityFilterQuery: FilterQuery<T> = {},
    projection: ProjectionType<T> = {},
    options: QueryOptions<T> = {},
  ): Promise<T[] | null> {
    return this.entityModel.find(entityFilterQuery, projection, options);
  }

  findOne(
    entityFilterQuery: FilterQuery<T> = {},
    projection: ProjectionType<T> = {},
    options: QueryOptions<T> = {},
  ): Promise<T | null> {
    return this.entityModel.findOne(entityFilterQuery, projection, options);
  }

  findOneAndUpdate(
    entityFilterQuery: FilterQuery<T> = {},
    updateEntityDate: UpdateQuery<unknown>,
    options: QueryOptions<T> = {},
  ): Promise<T | null> {
    return this.entityModel.findOneAndUpdate(
      entityFilterQuery,
      updateEntityDate,
      options,
    );
  }

  findOneAndDelete(
    entityFilterQuery: FilterQuery<T> = {},
    options: QueryOptions<T> = {},
  ): Promise<T | null> {
    return this.entityModel.findOneAndDelete(entityFilterQuery, options);
  }

  exists(entityFilterQuery: FilterQuery<T> = {}) {
    return this.entityModel.exists(entityFilterQuery);
  }
}
