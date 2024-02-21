import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { EntityRepository } from 'src/database/entity.repository';
import { InjectModel } from '@nestjs/mongoose';
import { comment, CommentDocument } from './entities/comment.entity';

@Injectable()
export class CommentRepository extends EntityRepository<CommentDocument> {
  constructor(@InjectModel(comment.name) userModel: Model<CommentDocument>) {
    super(userModel);
  }
}
