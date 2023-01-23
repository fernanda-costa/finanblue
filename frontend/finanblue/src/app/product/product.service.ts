import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://localhost:7232/api/';
  private productUrl = 'product/';

  constructor(private httpClient: HttpClient) { }

  createProduct(product: Product): Observable<any> {
    return this.httpClient.post<Product>(`${this.baseUrl}${this.productUrl}`, product);
  }

  updateProduct(product: Product): Observable<any> {
    return this.httpClient.put<Product>(`${this.baseUrl}${this.productUrl}${product.id}`, product);
  }

  deleteProduct(product: string): Observable<any> {
    return this.httpClient.delete<Product>(`${this.baseUrl}${this.productUrl}${product}`);
  }

  getAllProducts() : Observable<any> {
    return this.httpClient.get<Product[]>(`${this.baseUrl}${this.productUrl}`);
  }

  getAllProductsByCompanyId(id: string) : Observable<any> {
    return this.httpClient.get<Product[]>(`${this.baseUrl}${this.productUrl}company/${id}`);
  }

  getProductById(product: string) : Observable<any> {
    return this.httpClient.get<Product>(`${this.baseUrl}${this.productUrl}${product}`);
  }
}
