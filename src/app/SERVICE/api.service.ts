import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../COMPONENTS/products/product';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _jsonURL ='assets/DATA/products.json';
  constructor(private Http: HttpClient) { }

  getJson():Observable<Product[]>{
        return this.Http.get<Product[]>(this._jsonURL);
  }
}