import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogConfirmAddProductCartComponent } from './components/dialog-confirm-add-product-cart/dialog-confirm-add-product-cart.component';

const components = [
  ProductCreateComponent,
  ProductListComponent,
  ProductDetailsComponent
];

@NgModule({
  declarations: [...components, DialogConfirmAddProductCartComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule
  ],
  exports: [...components]
})
export class ProductModule { }
