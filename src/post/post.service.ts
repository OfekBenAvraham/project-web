import { Injectable } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { CreatePostDto } from './dto/create-post.dto';
import { PostByCategoryDto } from './dto/post-by-category.dto';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  create(createPostDto: CreatePostDto) {
    return this.postRepository.create(createPostDto);
  }

  findAll() {
    return this.postRepository.find();
  }

  findOne(id: string) {
    return this.postRepository.findOne({ _id: id });
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
