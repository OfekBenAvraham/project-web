import { Injectable } from "@nestjs/common";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { CategoryRepository } from "./category.repository";

@Injectable()
export class CategoryService { 
    constructor(private readonly categoryRepository: CategoryRepository) {}

    create(createCategoryDto: CreateCategoryDto) {
        return this.categoryRepository.create(createCategoryDto);
    }

    findAll() {
        return this.categoryRepository.find();
    }
}