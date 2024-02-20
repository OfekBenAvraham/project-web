import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandService } from './command.service';
import { CreateCommandDto } from './dto/create-command.dto';
import { CommandByPostDto } from './dto/command-by-post.dto';

@Controller('command')
export class CommandController {
  constructor(private readonly commandService: CommandService) {}

  @Post()
  create(@Body() createCommandDto: CreateCommandDto) {
    return this.commandService.create(createCommandDto);
  }

  @Get()
  async findAll() {
    return await this.commandService.findAll();
  }

  @Get(':id')
  async findByPostId(@Param('id') id: string) {
    return await this.commandService.findByPostId(id);
  }
}
