import { Component, OnInit, inject } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  email = 'johndoe@example.com';
  customers: Customer[] = [];

  private customerService = inject(CustomerService);

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe(
      (data: Customer[]) => {
        this.customers = data;
        // Handle the received data here
      },
      (error) => {
        console.error('Error fetching customers:', error);
        // Handle error here
      }
    );
  }
}
