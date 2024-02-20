import { Injectable } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { EntityRepository } from 'src/database/entity.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Command, CommandDocument } from './entities/command.entity';

@Injectable()
export class CommandRepository extends EntityRepository<CommandDocument> {
  constructor(@InjectModel(Command.name) userModel: Model<CommandDocument>) {
    super(userModel);
  }
}
