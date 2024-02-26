import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Customer } from '../models/Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private BASE_URL: string = 'http://localhost:8081/savings/api/v1/customers';
  private http = inject(HttpClient);

  constructor() {}

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.BASE_URL + '/all');
  }
}
