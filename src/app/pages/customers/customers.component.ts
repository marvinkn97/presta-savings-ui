import { Component, OnInit, inject } from '@angular/core';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent implements OnInit {
  email = 'foo@example.com';
  customers: Customer[] = [];
  loading = false;
  pageList: number[] = [];
  currentPage!: number;
  pageSize!: number;

  private customerService = inject(CustomerService);

  ngOnInit(): void {
    this.loading = true;
    this.customerService.getAllCustomers().subscribe(
      (data: Customer[]) => {
        this.customers = data;
        this.loading = false;

        this.currentPage = 1; // Initial page
        this.pageSize = 5; // Adjust this as needed based on your requirements
        const totalPages = Math.ceil(this.customers.length / this.pageSize);

        // Generate page numbers based on the total number of pages
        for (let i = 1; i <= totalPages; i++) {
          this.pageList.push(i);
        }
      },
      (error) => {
        this.loading = false;
        console.error('Error fetching customers:', error);
        // Handle error here
      }
    );
  }

  // Method to handle page change
  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }
}
