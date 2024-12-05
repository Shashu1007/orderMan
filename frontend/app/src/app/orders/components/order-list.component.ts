import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  pageSize = 10;
  currentPage = 0;
  totalItems = 0;
  filterName = '';
  filterCategory = '';
  

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  
  loadOrders(): void {
    this.orderService.getOrders().subscribe({
      next: (response) => {
        this.orders = response;
        this.totalItems = this.orders.length;
      },
      error: (error) => {
        console.error('Error fetching orders:', error);
      }
    });
  }

  // loadOrders(): void {
  //   this.productService.getOrders(this.currentPage, this.pageSize, this.filterName, this.filterCategory).subscribe({
  //     next: (response) => {
  //       this.orders = response.orders;
  //       this.totalItems = response.totalItems;
  //     },
  //     error: (error) => {
  //       console.error('Error fetching products:', error);
  //     }
  //   });
  // }

  
  onPaginateChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadOrders();
  }

  onDelete(id: number): any {
    this.orderService.deleteOrder(id).subscribe(() => {
      this.loadOrders();
    });
  }

  onSearch(): void {
    this.loadOrders();
  }
}
