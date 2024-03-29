import { Body, Controller, Get, Param, Post, Request, UseGuards} from '@nestjs/common';
import { commentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: commentService, private jwtService: JwtService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createCommentDto: CreateCommentDto, @Request() req) {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = this.jwtService.decode(token);
    const userId = decoded.sub; // user's ID
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
