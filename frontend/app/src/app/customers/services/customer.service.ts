import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = environment.baseUrl + 'customers'; 

  constructor(private http: HttpClient) {}

  getCustomers(page: number, size: number, name?: string, email?: string, sortBy: string = 'customerName', sortDir: string = 'asc'): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString())
      .set('sortBy', sortBy)
      .set('sortDir', sortDir);
    
    if (name) params = params.set('name', name);
    if (email) params = params.set('email', email);
  
    return this.http.get<any>(this.apiUrl, { params });
  }
  
  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.apiUrl}`, customer);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.apiUrl}/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
