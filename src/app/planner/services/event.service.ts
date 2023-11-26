import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Event } from "@planner/interfaces";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class EventService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  saveEvent(event: Event): Observable<Event> {
    const url = `${this.apiUrl}/event`;
    return this.http.post<Event>(url, event);
  }
}
