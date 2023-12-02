import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class UserService {
    private token: string;


    get accessToken(): string {
        return this.token;
    }

    set accessToken(value: string) {
        this.token = value;
    }
}
