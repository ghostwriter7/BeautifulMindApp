import { Module } from '@nestjs/common';
import { AuthController } from '@auth/auth.controller';
import { AuthService } from '@auth/auth.service';
import { UserModule } from "@user/user.module";
import { JwtModule } from "@nestjs/jwt";
import { JWT_SECRET } from "@auth/constants";
import { APP_GUARD } from "@nestjs/core";
import { AuthGuard } from "@auth/guards";
import { RoleGuard } from "@auth/guards/role.guard";

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: JWT_SECRET,
            signOptions: { expiresIn: '60s' }
        }),
        UserModule],
    controllers: [AuthController],
    providers: [AuthService,
        { provide: APP_GUARD, useClass: AuthGuard },
        { provide: APP_GUARD, useClass: RoleGuard }
    ]
})
export class AuthModule {
}
