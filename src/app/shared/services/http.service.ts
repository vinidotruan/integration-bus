import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(protected httpClient: HttpClient) {}

  public get = (uri: string, params?: any): Observable<any> => {
    const url = `http://www.poatransporte.com.br/php/facades/process.php/${uri}`;
    return this.httpClient.get(url, {
      params,
    });
  };

  public post = (uri: string, body?: any): Observable<any> => {
    const url = `http://localhost:8080/${uri}`;
    return this.httpClient.post(url, body);
  };
}
