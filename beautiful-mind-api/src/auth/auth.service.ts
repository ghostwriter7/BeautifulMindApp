import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from "@user/user.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {

  constructor(
    private jwtService: JwtService,
    private userService: UserService) {
  }

  async signIn(username: string, pass: string): Promise<{ accessToken: string }> | undefined {
    const user = await this.userService.findOne(username);

    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.userId, username: user.username };
    return { accessToken: await this.jwtService.signAsync(payload) };
  }
}

