import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyCreateComponent } from './components/company-create/company-create.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { CompanyListComponent } from './components/company-list/company-list.component';

const routes: Routes = [
  { path: '', component: CompanyListComponent },
  { path: 'nova', component: CompanyCreateComponent},
  { path: ':id', component: CompanyDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
