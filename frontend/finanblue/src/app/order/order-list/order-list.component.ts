import { Component } from '@angular/core';
import { Order } from 'src/models/order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent {

  isLoading = true;
  orders: Order[] = [];

  displayedColumns: string[] = ['orderDate', 'items', 'totalValue', 'actions'];

  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getAllOrders().subscribe(orders => {
      this.orders = orders;
    })
  }

  getItems(element: Order) {
    return element?.items?.map(e => e.product?.name).join(', ');
  }
}
