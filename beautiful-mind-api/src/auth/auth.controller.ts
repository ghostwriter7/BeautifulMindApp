import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req } from '@nestjs/common';
import { AccessToken, AuthService } from "@auth/auth.service";
import { Public } from "@auth/public.decorator";
import { User } from "@user/user.entity";
import { Request } from "express";

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {
    }

    @HttpCode(HttpStatus.OK)
    @Post("login")
    signIn(@Body() signInDto: Record<'username' | 'password', string>): AccessToken {
        return this.authService.signIn(signInDto.username, signInDto.password);
    }

    @Public()
    @Post("signup")
    signUp(@Body() signUpDto: Record<'email' | 'password', string>): AccessToken {
        return this.authService.signUp(signUpDto.email, signUpDto.password);
    }

    @Get("profile")
    getProfile(@Req() request: Request): Partial<User> {
        return request['user'];
    }
}
