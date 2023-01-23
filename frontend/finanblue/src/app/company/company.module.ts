import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { CompanyCreateComponent } from './components/company-create/company-create.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductModule } from '../product/product.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

const components = [
  CompanyListComponent,
  CompanyCreateComponent,
  CompanyDetailsComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CompanyRoutingModule,
    ProductModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ], exports: [...components]
})
export class CompanyModule { }
