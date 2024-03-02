import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const newUser = {
      ...createUserDto,
      password: hashedPassword,
    };
    return this.userRepository.create(newUser);
  }

  async findUserById(id: string) {
    return this.userRepository.findOne({ _id: id });
  }

  async findUserByEmail(email:string) {
    let user = await this.userRepository.findOne({ email }, {}, {lean: true});
    if (!user) {
      throw new HttpException('user not found.', HttpStatus.NOT_FOUND);
    }
    return user;
  }
}