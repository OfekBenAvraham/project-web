import { Injectable } from '@nestjs/common';
import { CommandRepository } from './command.repository';
import { CreateCommandDto } from './dto/create-command.dto';

@Injectable()
export class CommandService {
  constructor(private readonly commandRepository: CommandRepository) {}

  create(createCommandDto: CreateCommandDto) {
    return this.commandRepository.create(createCommandDto);
  }

  findAll() {
    return this.commandRepository.find();
  }

  findByPostId(id: string) {
    return this.commandRepository.find({ post: id });
  }
}
