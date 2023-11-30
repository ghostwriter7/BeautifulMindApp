import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from "@user/user.service";

@Injectable()
export class AuthService {

  constructor(private userService: UserService) {
  }

  async signIn(username: string, pass: string): Promise<{
    userId: number,
    username: string,
  }> | undefined {
    const user = await this.userService.findOne(username);

    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const { password, ...result } = user;
    // TODO generate JWT token
    return result;
  }
}

