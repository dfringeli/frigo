import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  private http = inject(HttpClient);

  private baseUrl = 'http://localhost:8081';

  constructor() {}

  getHello(): Observable<string> {
    return this.http.get(`${this.baseUrl}/hello`, {
      responseType: 'text' as const,
    }) as Observable<string>;
  }
}
