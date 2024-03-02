import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PostByCategoryDto } from './dto/post-by-category.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() createUserDto: CreatePostDto) {
    return this.postService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return await this.postService.findAll();
  }

  @Post('category')
  async findByCategory(@Body() postByCategoryDto: PostByCategoryDto) {
    return await this.postService.findByCategory(postByCategoryDto);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.postService.findOne(id);
  }
}
