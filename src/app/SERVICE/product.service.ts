import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/models/product';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
    productUrl = "https://localhost:44327/product/";
    constructor(private httpClient: HttpClient) { }

    GetProduct(connectionId: string): Promise<any[]> {
        return this.httpClient.get<Product[]>(this.productUrl+ `${connectionId}`).toPromise();
    }
}