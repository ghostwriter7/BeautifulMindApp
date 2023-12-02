import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly api = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  signIn(email: string, password: string): Observable<{ accessToken: string }> {
    const url = `${this.api}/auth/signin`;
    return this.http.post<{ accessToken: string }>(url, { email, password });
  }

  signUp(email: string, password: string): Observable<{ accessToken: string }> {
    const url = `${this.api}/auth/signup`;
    return this.http.post<{ accessToken: string }>(url, { email, password });
  }
}
