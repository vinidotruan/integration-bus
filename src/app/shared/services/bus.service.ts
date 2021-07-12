import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class BusService extends HttpService {
  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  public getBusLines = () => {
    return this.get(`?a=nc&p=%25&t=o`);
  };

  public getMicroBusLines = () => {
    return this.get(`?a=nc&p=%25&t=l`);
  };

  public getItinerary = (id: string) => {
    return this.get(`?a=il&p=${id}`);
  };
}
