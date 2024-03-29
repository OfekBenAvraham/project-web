// jwt.strategy.ts
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: '2cf63dde04e8646116a44522772515f66a1aae463d4a84982239fed16e49655b21a890cb5fefd866e9e73e901a199955468dc3517d4184bce90dd2de90748316',
    });
  }

  async validate(payload: any) {
    return this.userService.findUserById(payload.sub);
  }
}
