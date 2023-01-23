import { Product } from "./product.model";

export class OrderItem {

    product?: Product;
    productId?: string;
    productQuantity: number = 0;
}
