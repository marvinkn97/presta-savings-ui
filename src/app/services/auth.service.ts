import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { LoginRequest } from '../dtos/login.request';
import { APIResponse } from '../dtos/api.response';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  iss: string;
  iat: number;
  exp: number;
  sub: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http: HttpClient = inject(HttpClient);
  private readonly BASE_URL = 'http://localhost:8081/savings/api/v1/auth';
  private router: Router = inject(Router);

  constructor() {}

  authenticate(loginRequest: LoginRequest): void {
    console.log(loginRequest);
    this.http.post<APIResponse>(this.BASE_URL, loginRequest).subscribe(
      (response) => {
        console.log(response.data);
        if (response.status === 200) {
          localStorage.removeItem('token');
          localStorage.setItem('token', JSON.stringify(response.data));
          Swal.fire({
            title: response.reason,
            text: 'Authenticated',
            icon: 'success',
          });

          let decodedToken = this.decodeToken(response.data as string);
          console.log(decodedToken);

          sessionStorage.setItem('role', decodedToken.role);
          sessionStorage.setItem('username', decodedToken.sub);
          this.router.navigateByUrl('home');
        }
      },
      (err) => {
        console.error(err);
        Swal.fire({
          title: err.error.reason,
          text: err.error.data as string,
          icon: 'error',
        });
      }
    );
  }

  logout(): void {
    if (confirm('Are you sure you want to logout?')) {
      localStorage.clear();
      this.router.navigateByUrl('login');
    }
    return;
  }

  decodeToken(token: string): JwtPayload {
    try {
      return jwtDecode<JwtPayload>(token);
    } catch (error) {
      console.error('Invalid token', error);
      throw error;
    }
  }
}
