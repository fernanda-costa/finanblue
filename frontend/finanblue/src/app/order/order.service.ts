import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'https://localhost:7232/api/';
  private companyUrl = 'order/';

  constructor(private http: HttpClient) { }

  createOrder(order: Order) : Observable<any> {
    return this.http.post<Order>(`${this.baseUrl}${this.companyUrl}`, order);
  }

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}${this.companyUrl}`);
  }

  getOrderDetails(orderId: string) {
    return this.http.get<Order>(`${this.baseUrl}${this.companyUrl}${orderId}`);
  }
}
