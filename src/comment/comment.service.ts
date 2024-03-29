import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CommentRepository } from './comment.repository';
import { CreateCommentDto } from './dto/create-comment.dto';
import { PostService } from '../post/post.service';
import { UserService } from '../user/user.service';

@Injectable()
export class CommentService {
  constructor(
    private readonly commentRepository: CommentRepository,
    private readonly postService: PostService,
    private readonly userService: UserService,
  ) {}

  async create(createCommentDto: CreateCommentDto, id: string) {
    let user = await this.userService.findUserById(id);

    if (!user) {
      throw new HttpException('user not found.', HttpStatus.NOT_FOUND);
    }
    let post = await this.postService.findOne(createCommentDto.post);
    if (!post) {
      throw new HttpException('post not found.', HttpStatus.NOT_FOUND);
    }
    return this.commentRepository.create({ ...createCommentDto, user: id });
  }

  findAll() {
    return this.commentRepository.find();
  }

  findByPostId(id: string) {
    return this.commentRepository.find(
      { post: id },
      {},
      { populate: 'user', lean: true },
    );
  }
}
