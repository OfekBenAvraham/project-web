import { Injectable } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { EntityRepository } from 'src/database/entity.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './entities/category.entity';

@Injectable()
export class CategoryRepository extends EntityRepository<CategoryDocument> {
  constructor(@InjectModel(Category.name) userModel: Model<CategoryDocument>) {
    super(userModel);
  }
}
