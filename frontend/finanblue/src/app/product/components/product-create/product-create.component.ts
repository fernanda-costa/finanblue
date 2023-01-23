import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {
  productForm: FormGroup;
  companyId?: string;

  constructor(
    formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
    
    this.companyId = this.route.snapshot.paramMap.get('id') || undefined;
    this.productForm = this.createForm(formBuilder);

    if (!this.companyId) {
      this.getEmpresas();
    }
  }
  private getEmpresas() {
  }

  private createForm(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      companyId: [this.companyId, Validators.required],
    });
  }

  public create(): void {
    const product = this.productForm.value;
    this.productService.createProduct(product).subscribe(e => {
      if(this.companyId) {
        this.router.navigate(['/','empresas', this.companyId])
      } else {
        this.router.navigate(['/produtos']);
      }
    })
  }


}
