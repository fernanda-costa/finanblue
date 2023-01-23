import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    CartComponent,

  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class CartModule { }
