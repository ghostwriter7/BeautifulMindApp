import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from "@user/user.module";
import { JwtModule } from "@nestjs/jwt";
import { JWT_SECRET } from "./constants";

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: JWT_SECRET,
      signOptions: { expiresIn: '60s' }
    }),
    UserModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {
}
