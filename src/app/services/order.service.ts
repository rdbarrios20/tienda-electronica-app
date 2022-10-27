import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  UrlApi = 'http://localhost:8000/api';

  constructor(public httpClient: HttpClient) {}

  getAll() {
    const data = this.httpClient.get(this.UrlApi + '/get-orders').pipe(
      map((response) => {
        return response;
      })
    );
    return data;
  }
  getProductsById(id: number) {
    const data = this.httpClient
      .get(this.UrlApi + '/get-products-order/' + id)
      .pipe(
        map((response) => {
          return response;
        })
      );
    return data;
  }
  getOrdersByDate2(event: any) {
    const data = this.httpClient
      .get(this.UrlApi + '/get-orders-date/' + event)
      .pipe(
        map((response) => {
          return response;
        })
      );
    return data;
  }
}
