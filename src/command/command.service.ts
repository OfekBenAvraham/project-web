import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CommandRepository } from './command.repository';
import { CreateCommandDto } from './dto/create-command.dto';
import { PostService } from 'src/post/post.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class CommandService {
  constructor(
    private readonly commandRepository: CommandRepository,
    private readonly postService: PostService,
    private readonly userService: UserService,
  ) {}

  async create(createCommandDto: CreateCommandDto) {
    let user = await this.userService.findUserById(createCommandDto.user);
    console.log(user);

    if (!user) {
      throw new HttpException('user not found.', HttpStatus.NOT_FOUND);
    }
    let post = await this.postService.findOne(createCommandDto.post);
    if (!post) {
      throw new HttpException('post not found.', HttpStatus.NOT_FOUND);
    }
    return this.commandRepository.create(createCommandDto);
  }

  findAll() {
    return this.commandRepository.find();
  }

  findByPostId(id: string) {
    return this.commandRepository.find({ post: id });
  }
}
