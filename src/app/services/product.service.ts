// products.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ProductActions from '../admin/state/products.actions';
import { ProductState } from '../admin/state/products.state';
import { ProductResponseData } from '../models/product.model';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private store: Store<{ products: ProductState }>) { }

  getProducts(): Observable<ProductResponseData[]> {
    return this.http.get<ProductResponseData[]>(`${this.apiUrl}/products`);
  }

  getProductDetail(id: number): Observable<ProductResponseData> {
    return this.http.get<ProductResponseData>(`${this.apiUrl}/products/${id}`);
  }

  loadProducts() {
    this.store.dispatch(ProductActions.loadProducts());
  }
  deleteProduct(productId: number): Observable<void> {
    const url = `${this.apiUrl}/products/${productId}`;
    return this.http.delete<void>(url);
  }
}
