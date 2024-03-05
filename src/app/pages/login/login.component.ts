import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  router = inject(Router);

  loginForm = new FormGroup({
    email: new FormControl(['', Validators.required]),
    password: new FormControl('', Validators.required),
  });

  goToRegisterPage() {
    this.router.navigateByUrl('/register');
  }
}
