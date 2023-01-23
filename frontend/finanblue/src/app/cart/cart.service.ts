import { Injectable } from '@angular/core';
import { CartItem } from 'src/models/cart-item.model';
import { Cart } from 'src/models/cart.model';
import { Product } from 'src/models/product.model';

const CART_KEY = "cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {


  cart: Cart;

  constructor() {
    this.cart = this.getCart();
  }

  addProduct(product: Product, quantity: number = 1) {
    this.cart = this.getCart();

    const itemIndex = this.cart.cartItems?.findIndex(item => item.product?.id == product.id);
    if (itemIndex != -1) {
      this.cart.cartItems[itemIndex].productQuantity += quantity;
    } else {
      this.cart.cartItems.push({ product, productQuantity: quantity, productId: product.id});
    }

    this.calculateTotalValue(product, quantity);
    this.setCart(this.cart);
  }

  getCart(): Cart {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : new Cart();
  }

  setCart(cart: Cart): void {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }

  clearCart(): void {
    this.cart = new Cart();
    this.setCart( this.cart);
  }

  removeCartItem(itemCart: CartItem) : void {
    
  }

  private calculateTotalValue(product: Product, quantity: number) {
    this.cart.totalValue += product.price * quantity;
  }

}
