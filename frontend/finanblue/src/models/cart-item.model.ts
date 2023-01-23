import { Product } from "./product.model";

export class CartItem {

    product?: Product;
    productId?: string;
    productQuantity: number = 0;
}
