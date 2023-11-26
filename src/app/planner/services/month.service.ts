import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Month } from "@planner/interfaces";

@Injectable({ providedIn: 'root'})
export class MonthService {
  private readonly apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getMonthData(month: number, year: number): Observable<Month> {
    const url = `${this.apiUrl}/month`;
    const params = new HttpParams({ fromObject: { month, year }});
    return this.http.get<Month>(url, { params });
  }
}
