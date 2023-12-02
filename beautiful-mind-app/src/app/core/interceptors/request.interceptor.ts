import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserService } from "@auth/services/user.service";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(private userService: UserService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.includes('api/auth')) {
            return next.handle(req);
        }

        const authorizedRequest = req.clone({
            setHeaders: {
                Authorization: `Bearer ${this.userService.accessToken}`
            }
        });

        return next.handle(authorizedRequest);
    }

}
