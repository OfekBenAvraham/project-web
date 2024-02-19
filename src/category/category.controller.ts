import { Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(createUserDto: CreateCategoryDto) {
    return this.categoryService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return await this.categoryService.findAll();
  }
}
