import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request } from '@nestjs/common';
import { AuthService } from "@auth/auth.service";
import { Public } from "@auth/public.decorator";

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {
  }

  @HttpCode(HttpStatus.OK)
  @Post("login")
  signIn(@Body() signInDto: Record<'username' | 'password', string>): any {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @Get("profile")
  getProfile(@Request() request): any {
    return request.user;
  }

  @Public()
  @Get("public")
  getPublic(): string {
    return "I'm not protected";
  }

}
