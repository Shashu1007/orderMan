import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  pageSize = 10;
  currentPage = 0;
  totalItems = 0;
  filterName = '';
  filterCategory = '';
  

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  
  // loadProducts(): void {
  //   this.productService.getAllProducts().subscribe({
  //     next: (response) => {
  //       this.products = response;
  //       this.totalItems = this.products.length;
  //     },
  //     error: (error) => {
  //       console.error('Error fetching products:', error);
  //     }
  //   });
  // }

  loadProducts(): void {
    this.productService.getProducts(this.currentPage, this.pageSize, this.filterName, this.filterCategory).subscribe({
      next: (response) => {
        this.products = response.products;
        this.totalItems = response.totalItems;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }

  
  onPaginateChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadProducts();
  }

  onDelete(id: number): any {
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts();
    });
  }

  onSearch(): void {
    this.loadProducts();
  }
}
