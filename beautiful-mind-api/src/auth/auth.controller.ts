import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req } from '@nestjs/common';
import { AccessToken, AuthService } from "@auth/auth.service";
import { Public } from "@auth/decorators";
import { User } from "@user/entities";
import { Request } from "express";
import { AuthDto } from "@auth/dto";

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {
    }

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post("signin")
    signIn(@Body() authDto: AuthDto): AccessToken {
        return this.authService.signIn(authDto.email, authDto.password);
    }

    @Public()
    @Post("signup")
    signUp(@Body() authDto: AuthDto): AccessToken {
        return this.authService.signUp(authDto.email, authDto.password);
    }

    @Get("profile")
    getProfile(@Req() request: Request): Partial<User> {
        return request['user'];
    }
}
