import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HelloService  {
  private readonly http = inject(HttpClient);

  getHello(): Observable<string> {
    return this.http.get(`${environment.apiUrl}/hello`, {
      responseType: 'text' as const,
    }) as Observable<string>;
  }
}
