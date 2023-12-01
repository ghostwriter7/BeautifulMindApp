import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "@auth/decorators";
import { Role } from "@auth/enums";
import { User } from "@user/user.entity";

@Injectable()
export class RoleGuard implements CanActivate {

    constructor(private reflector: Reflector) {
    }

    canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [context.getClass(), context.getHandler]);

        if (!roles) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const user: User = request['user'];

        const hasRoles = roles.every((role) => user.roles?.includes(role));

        if (hasRoles) {
            return true;
        }

        throw new ForbiddenException();
    }

}
