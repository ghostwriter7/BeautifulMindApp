import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from "@user/user.service";
import { JwtService } from "@nestjs/jwt";
import { User } from "@user/user.entity";
import * as bcrypt from 'bcrypt';

export type AccessToken = Promise<{ accessToken: string }>;

@Injectable()
export class AuthService {

    constructor(
        private jwtService: JwtService,
        private userService: UserService) {
    }

    async signIn(email: string, password: string): AccessToken | undefined {
        const user = await this.userService.findByEmail(email);

        if (!user) {
            throw new UnauthorizedException();
        }

        const isValid = await bcrypt.compare(user.hash, password);

        if (!isValid) {
            throw new UnauthorizedException();
        }

        return await this.getAccessToken(user);
    }

    async signUp(email: string, password: string): AccessToken | undefined {
        const user = await this.userService.create(email, password);

        if (!user) {
            throw new UnauthorizedException();
        }

        return await this.getAccessToken(user);
    }

    private async getAccessToken(user: User): AccessToken {
        const payload = { sub: user.id, email: user.email };
        return { accessToken: await this.jwtService.signAsync(payload) };
    }
}

