import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login.dto';
import { AuthService } from '../auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    const user = await this.authService.validateUser(
      loginUserDto.email,
      loginUserDto.password,
    );

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    console.log(user);
    const payload = { email: user.email, sub: user._id };
    console.log(payload);
  
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
