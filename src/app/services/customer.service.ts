import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs';
import { CustomerRegistrationRequest } from '../dtos/CustomerRegistrationRequest';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private BASE_URL: string = 'http://localhost:8081/savings/api/v1/customers';
  private http = inject(HttpClient);

  constructor() {}

  registerCustomer(
    registrationRequest: CustomerRegistrationRequest
  ): Observable<string> {
    console.log(JSON.stringify(registrationRequest));
    return this.http.post<string>(
      `${this.BASE_URL}/register`,
      registrationRequest
    );
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.BASE_URL + '/all');
  }
}
