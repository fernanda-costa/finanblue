import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/company/company.service';
import { Company } from 'src/models/company.model';
import { Product } from 'src/models/product.model';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  isLoading: boolean = false;
  productForm: FormGroup;

  productId?: string;
  product?: Product;

  constructor(
    formBuilder: FormBuilder,
    private productsService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productId = this.route.snapshot.paramMap.get('id') || undefined;
    this.productForm = this.createForm(formBuilder);

    this.getProductById(this.productId!);
  }



  public update(): void {
    this.productsService.updateProduct(this.productForm.value)
      .subscribe(e => {
        this.router.navigate(['produtos']);
      })
  }

  private createForm(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      id: [this.productId, Validators.required],
      name: [this.product?.name, Validators.required],
      description: [this.product?.description, Validators.required],
      price: [this.product?.price, Validators.required],
      companyId: [this.product?.companyId, Validators.required],
    });
  }

  private getProductById(productId: string) {
    this.productsService.getProductById(productId)
      .subscribe(products => {
        this.productForm.patchValue(products);
      });
  }
}
