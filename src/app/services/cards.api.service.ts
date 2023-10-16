import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productinterface } from '../interface/productinterface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CardsApiService {
  constructor(private http: HttpClient) {}

  GetCards(): Observable<any> {
    return this.http.get<Array<Productinterface>>(
      'https://dummyjson.com/products'
    );
  }
  GetCard(id: number) {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}
