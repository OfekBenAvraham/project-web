import { Injectable } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { EntityRepository } from 'src/database/entity.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Post, PostDocument } from './entities/post.entity';

@Injectable()
export class PostRepository extends EntityRepository<PostDocument> {
  constructor(@InjectModel(Post.name) userModel: Model<PostDocument>) {
    super(userModel);
  }

  findDistinct(field: string, entityFilterQuery: FilterQuery<Post> = {}) {
    return this.entityModel.distinct(field, entityFilterQuery);
  }
}
