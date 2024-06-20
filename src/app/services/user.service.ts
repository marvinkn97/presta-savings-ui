import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { APIResponse } from '../domain/dtos/api.response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http: HttpClient = inject(HttpClient);
  private readonly BASE_URL = 'http://localhost:8081/savings/api/v1/users';
  token = JSON.parse(sessionStorage.getItem('token') ?? '');

  constructor() {}

  getAllUsers(): Observable<APIResponse> {
    console.log(this.token);

    let headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.token}`)
      .set('Content-Type', 'application/json');

    return this.http.get<APIResponse>(this.BASE_URL, { headers });
  }

  getUserById(id: number): Observable<APIResponse> {
    let headers = new HttpHeaders()
      .set('Authorization', `Bearer ${this.token}`)
      .set('Content-Type', 'application/json');

    return this.http.get<APIResponse>(`${this.BASE_URL}/${id}`, { headers });
  }
}
