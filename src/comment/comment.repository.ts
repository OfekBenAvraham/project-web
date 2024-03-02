import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { EntityRepository } from '../database/entity.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Comment, CommentDocument } from './entities/comment.entity';

@Injectable()
export class CommentRepository extends EntityRepository<CommentDocument> {
  constructor(@InjectModel(Comment.name) userModel: Model<CommentDocument>) {
    super(userModel);
  }
}
