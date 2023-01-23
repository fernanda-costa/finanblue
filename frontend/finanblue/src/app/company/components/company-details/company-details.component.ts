import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/models/company.model';
import { Product } from 'src/models/product.model';
import { CompanyService } from '../../company.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent {

  isLoading: boolean = false;
  companyForm: FormGroup;

  companyId?: string;
  company?: Company;

  companyProducts: Product[] = [];

  constructor(
    formBuilder: FormBuilder,
    private companiesService: CompanyService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.companyId = this.route.snapshot.paramMap.get('id') || undefined;
    this.companyForm = this.createForm(formBuilder);

    this.getCompanyById();
  }

  private getCompanyById() {
    this.companiesService.getCompanyById(this.companyId!)
      .subscribe(company => {
        this.companyForm.patchValue(company);
      });
  }

  private createForm(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      id: [this.companyId, Validators.required],
      name: [this.company?.name, Validators.required],
      description: [this.company?.description, Validators.required]
    });
  }

  public update(): void {
    this.companiesService.updateCompany(this.companyForm.value)
      .subscribe(() => this.router.navigate(['/empresas']))
  }
}
