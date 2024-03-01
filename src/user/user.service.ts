import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.create(createUserDto);
  }

  async findUserById(id: string) {
    return this.userRepository.findOne({ _id: id });
  }

  async login(loginUserDto: LoginUserDto) {
    let user = await this.userRepository.findOne({ email: loginUserDto.email });

    if (!user) {
      throw new HttpException('user not found.', HttpStatus.NOT_FOUND);
    }

    if (loginUserDto.password !== user.password) {
      throw new HttpException('wrong password.', HttpStatus.BAD_REQUEST);
    }

    return user;
  }
}
