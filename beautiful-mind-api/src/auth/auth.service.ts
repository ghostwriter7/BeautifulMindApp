import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { UserService } from "@user/user.service";
import { JwtService } from "@nestjs/jwt";
import { User } from "@user/entities";
import * as bcrypt from 'bcrypt';

export type AccessToken = Promise<{ accessToken: string }>;

@Injectable()
export class AuthService {

    private readonly logger = new Logger(AuthService.name);

    constructor(
        private jwtService: JwtService,
        private userService: UserService) {
    }

    async signIn(email: string, password: string): AccessToken | undefined {
        this.logger.log(`Looking up the user with email: ${email}`);
        const user = await this.userService.findByEmail(email);

        if (!user) {
            this.logger.log(`User with email: ${email} does not exist`);
            throw new UnauthorizedException();
        }

        const isValid = await bcrypt.compare(password, user.hash);

        if (!isValid) {
            this.logger.log(`Invalid password for userId: ${user.id}, email: ${email}`);
            throw new UnauthorizedException();
        }

        return await this.getAccessToken(user);
    }

    async signUp(email: string, password: string): AccessToken | undefined {
        this.logger.log(`Attempt to create a user with email: ${email}`);
        const user = await this.userService.create(email, password);

        if (!user) {
            throw new UnauthorizedException();
        }

        this.logger.log(`New user created with userId: ${user.id} and email: ${email}`);
        return await this.getAccessToken(user);
    }

    private async getAccessToken(user: User): AccessToken {
        const payload = { sub: user.id, email: user.email };
        return { accessToken: await this.jwtService.signAsync(payload) };
    }
}

