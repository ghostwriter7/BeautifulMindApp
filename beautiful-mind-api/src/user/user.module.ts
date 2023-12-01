import { Module } from "@nestjs/common";
import { UserController } from "@user/user.controller";
import { UserService } from "@user/user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Role, User } from "@user/entities";

@Module({
    imports: [TypeOrmModule.forFeature([User, Role])],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {
}
