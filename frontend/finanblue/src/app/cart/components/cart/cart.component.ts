import { Component } from '@angular/core';
import { OrderService } from 'src/app/order/order.service';
import { CartItem } from 'src/models/cart-item.model';
import { Cart } from 'src/models/cart.model';
import { OrderItem } from 'src/models/order-item.model';
import { Order } from 'src/models/order.model';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cart?: Cart;

  constructor(private cartService: CartService, private orderService: OrderService) {
    this.getCart();
  }

  private getCart() {
    this.cart = this.cartService.getCart();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cart = this.cartService.getCart();
  }

  removeItem(itemCart: CartItem): void {
    this.cartService.removeCartItem(itemCart);
  }

  createOrder(): void {
    const orderItens = this.cart?.cartItems?.map<OrderItem>(e => { return { productQuantity: e.productQuantity, productId: e.productId } }) || [];
    const order: Order = {
      items: orderItens,
      totalPrice: this.cart?.totalValue || 0
    };
    this.orderService.createOrder(order).subscribe(e => {
      this.clearCart();
    });
  }
}
