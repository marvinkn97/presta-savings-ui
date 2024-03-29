import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { RegistrationRequest } from '../../dtos/RegistrationRequest';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  //dependency injection
  router: Router = inject(Router);
  customerService: CustomerService = inject(CustomerService);

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  registerCustomer() {
    if (!this.registerForm.valid) {
      alert('problem');
      return;
    }

    let registrationRequest: RegistrationRequest = {
      name: this.registerForm.value.name as string,
      email: this.registerForm.value.email as string,
      password: this.registerForm.value.password as string,
    };

    console.log(registrationRequest);

    this.customerService.registerCustomer(registrationRequest).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        // Handle success response from backend
      },
      (error) => {
        console.error('Registration error:', error);
        // Handle error response from backend
      }
    );
  }

  //navigate to login page
  goToLoginPage() {
    this.router.navigateByUrl('/login');
  }
}
