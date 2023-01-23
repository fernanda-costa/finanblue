import { OrderItem } from "./order-item.model";

export class Order {
    items: OrderItem[] = [];
    totalPrice: number = 0;
}

