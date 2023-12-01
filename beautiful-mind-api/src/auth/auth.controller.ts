import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req } from '@nestjs/common';
import { AccessToken, AuthService } from "@auth/auth.service";
import { Public } from "@auth/public.decorator";
import { User } from "@user/user.entity";
import { Request } from "express";

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {
    }

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post("signin")
    signIn(@Body() signInDto: Record<'email' | 'password', string>): AccessToken {
        return this.authService.signIn(signInDto.email, signInDto.password);
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
