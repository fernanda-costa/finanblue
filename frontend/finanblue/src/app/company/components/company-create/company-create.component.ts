import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../../company.service';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.scss']
})
export class CompanyCreateComponent {

  companyForm: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private companyService: CompanyService,
    private router: Router
  ) {
    this.companyForm = this.createForm(formBuilder);
  }

  private createForm(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  public create(): void {
    this.companyService
      .createCompany(this.companyForm.value)
      .subscribe(() => this.router.navigate(['/empresas']));
  }
}
