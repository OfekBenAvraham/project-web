import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() createUserDto: CreateCategoryDto) {
    return this.categoryService.create(createUserDto);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.categoryService.findOne(id);
  }

  @Get()
  async findAll() {
    return await this.categoryService.findAll();
  }
}
