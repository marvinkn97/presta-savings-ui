import { Component, OnInit, inject } from '@angular/core';
import { Customer } from '../../models/Customer';
import { CustomerService } from '../../services/customer.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent implements OnInit {
  email = 'foo@example.com';
  customers: Customer[] = [];
  loading = false;

  private customerService = inject(CustomerService);

  ngOnInit(): void {
    this.loading = true;
    this.customerService.getAllCustomers().subscribe(
      (data: Customer[]) => {
        this.customers = data;
        this.loading = false;
        // Handle the received data here
      },
      (error) => {
        this.loading = false;
        console.error('Error fetching customers:', error);
        // Handle error here
      }
    );
  }
}
