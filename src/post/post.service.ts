import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { CreatePostDto } from './dto/create-post.dto';
import { PostByCategoryDto } from './dto/post-by-category.dto';
import { CategoryService } from 'src/category/category.service';

@Injectable()
export class PostService {
  constructor(
    private readonly postRepository: PostRepository,
    private readonly categoryService: CategoryService,
  ) {}

  async create(createPostDto: CreatePostDto) {
    let category = await this.categoryService.findOne(createPostDto.category);
    if (!category) {
      throw new HttpException('category not found.', HttpStatus.NOT_FOUND);
    }
    return this.postRepository.create(createPostDto);
  }

  findAll() {
    return this.postRepository.find(
      {},
      {},
      { populate: 'category', lean: true },
    );
  }

  findOne(id: string) {
    return this.postRepository.findOne(
      { _id: id },
      {},
      { populate: 'category', lean: true },
    );
  }

  async findByCategory(postByCategoryDto: PostByCategoryDto) {
    const postsWithCategory = await this.postRepository.find(
      {},
      {},
      {
        populate: { path: 'category', match: { name: postByCategoryDto.name } },
        lean: true,
      },
    );
    const filteredPosts = postsWithCategory.filter((post) => post.category);
    return filteredPosts;
  }
}
