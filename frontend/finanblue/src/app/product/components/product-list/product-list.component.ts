import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { Product } from 'src/models/product.model';
import { ProductService } from '../../product.service';
import { DialogConfirmAddProductCartComponent } from '../dialog-confirm-add-product-cart/dialog-confirm-add-product-cart.component';

export interface PeriodicElement {
  name: string;
  id: number;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Hydrogen', price: 1.0079 },
  { id: 2, name: 'Helium', price: 4.0026 },
];

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  @Input() companyId?: string;

  isLoading = true;
  products: Product[] = [];

  displayedColumns: string[] = ['name', 'description', 'price', 'actions'];

  constructor(
    private productsService: ProductService,
    private cartService: CartService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    const operation = this.companyId ?
      this.productsService.getAllProductsByCompanyId(this.companyId!) :
      this.productsService.getAllProducts();

    operation.subscribe(products => {
      this.products = products;
      this.isLoading = false;
    })
  }

  addToCart(product: Product): void {
    this.cartService.addProduct(product);
    const dialogRef = this.dialog.open(DialogConfirmAddProductCartComponent, {});

    dialogRef.afterClosed().subscribe(goToCart => {
      if(goToCart) this.router.navigate(['carrinho'])
    });
  }

  delete(productId: string): void {
    this.productsService.deleteProduct(productId)
    .subscribe(() => this.getProducts());

  }
}
