import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { commentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: commentService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }

  @Get()
  async findAll() {
    return await this.commentService.findAll();
  }

  @Get(':id')
  async findByPostId(@Param('id') id: string) {
    return await this.commentService.findByPostId(id);
  }
}
