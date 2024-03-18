import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';
import { RegistrationRequest } from '../dtos/RegistrationRequest';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private BASE_URL: string = 'http://localhost:8081/savings/api/v1/customers';
  private http = inject(HttpClient);
  private username = 'user';
  private password = 'password';

  constructor() {}

  registerCustomer(
    registrationRequest: RegistrationRequest
  ): Observable<string> {
    console.log(JSON.stringify(registrationRequest));
    return this.http.post<string>(
      `${this.BASE_URL}/register`,
      registrationRequest
    );
  }

  getAllCustomers(): Observable<Customer[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
      }),
    };

    return this.http.get<Customer[]>(`${this.BASE_URL}/all`, httpOptions);
  }
}
