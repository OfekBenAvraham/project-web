import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post()
  async login(loginUserDto: LoginUserDto) {
    return await this.userService.login(loginUserDto);
  }
}
