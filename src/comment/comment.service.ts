import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CommentRepository } from './comment.repository';
import { CreateCommentDto } from './dto/create-comment.dto';
import { PostService } from 'src/post/post.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class commentService {
  constructor(
    private readonly commentRepository: CommentRepository,
    private readonly postService: PostService,
    private readonly userService: UserService,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    let user = await this.userService.findUserById(createCommentDto.user);
    console.log(user);

    if (!user) {
      throw new HttpException('user not found.', HttpStatus.NOT_FOUND);
    }
    let post = await this.postService.findOne(createCommentDto.post);
    if (!post) {
      throw new HttpException('post not found.', HttpStatus.NOT_FOUND);
    }
    return this.commentRepository.create(createCommentDto);
  }

  findAll() {
    return this.commentRepository.find();
  }

  findByPostId(id: string) {
    return this.commentRepository.find({ post: id });
  }
}
