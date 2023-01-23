import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Company } from 'src/models/company.model';
import { CompanyService } from '../../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit, OnDestroy {

  isLoading = true;
  companies: Company[] = [];

  displayedColumns: string[] = ['name', 'description', 'actions'];

  subscription?: Subscription;

  constructor(private companiesService: CompanyService) {
    this.getCompanies();
  }

  ngOnInit(): void { }

  getCompanies() {
    this.subscription = this.companiesService.getAllCompanies()
    .subscribe(companies => {
      this.companies = companies;
      this.isLoading = false;
    });
  }

  public delete(companyId: string): void {
    this.companiesService.deleteCompany(companyId)
    .subscribe(() => this.getCompanies());
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
