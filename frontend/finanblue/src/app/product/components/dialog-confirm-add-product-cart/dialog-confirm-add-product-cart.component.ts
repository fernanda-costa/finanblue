import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-confirm-add-product-cart',
  templateUrl: './dialog-confirm-add-product-cart.component.html',
  styleUrls: ['./dialog-confirm-add-product-cart.component.scss']
})
export class DialogConfirmAddProductCartComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmAddProductCartComponent>,
  ) {}

  goToCarrinho(): void {
    this.dialogRef.close(true);
  }
}
