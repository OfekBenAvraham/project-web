import { Body, Controller, Get, Param, Post, Request, UseGuards} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { JwtService } from '@nestjs/jwt';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService, private jwtService: JwtService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto, @Request() req) {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = this.jwtService.decode(token);
    let userId = null;
    if(decoded) {
      userId = decoded.sub; // user's ID
    }
    return this.commentService.create(createCommentDto, userId);
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
