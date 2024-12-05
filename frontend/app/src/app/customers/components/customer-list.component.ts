import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
 

})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  pageSize = 10;
  currentPage = 0;
  totalItems = 0;
  filterName = '';
  filterEmail = '';

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customerService.getCustomers(this.currentPage, this.pageSize, this.filterName, this.filterEmail).subscribe(response => {
      this.customers = response.customers;
      this.totalItems = response.totalItems;
    });
  }

  onPaginateChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadCustomers();
  }

  onDelete(id: number): void {
    this.customerService.deleteCustomer(id).subscribe(() => {
      this.loadCustomers();
    });
  }

  onSearch(): void {
    this.loadCustomers();
  }
}
