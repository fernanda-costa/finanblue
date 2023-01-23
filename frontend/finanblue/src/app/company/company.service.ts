import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Company } from 'src/models/company.model';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private baseUrl = 'https://localhost:7232/api/';
  private companyUrl = 'company/';

  constructor(private http: HttpClient) { }

  createCompany(company: Company): Observable<any> {
    return this.http.post<Company>(`${this.baseUrl}${this.companyUrl}`, company);
  }

  updateCompany(company: Company): Observable<any> {
    return this.http.put<Company>(`${this.baseUrl}${this.companyUrl}${company.id}`, company);
  }

  deleteCompany(companyId: string): Observable<any> {
    return this.http.delete<Company>(`${this.baseUrl}${this.companyUrl}${companyId}`);
  }

  getAllCompanies() : Observable<any> {
    return this.http.get<Company[]>(`${this.baseUrl}${this.companyUrl}`);
  }

  getCompanyById(companyId: string) : Observable<any> {
    return this.http.get<Company>(`${this.baseUrl}${this.companyUrl}${companyId}`);
  }
}
