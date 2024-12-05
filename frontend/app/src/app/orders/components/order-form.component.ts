import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {
  @Input() productId?: number;
  productForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      productCategory: [''],
      stockQuantity: ['', [Validators.required, Validators.email]],
      Uom: ['', Validators.required],
      pricePerUnit: ['', Validators.required],
      
      specification: ['']
      

    });

    if (this.productId) {
      this.loadProduct(this.productId);
    }
  }

  loadProduct(id: number): void {
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const productData: Order = this.productForm.value;

      if (this.productId) {
        this.orderService.updateOrder(this.productId, productData).subscribe(() => {
          this.router.navigate(['/products']);
        });
      } else {
        this.orderService.createOrder(productData).subscribe(() => {
          this.router.navigate(['/products']);
        });
      }
    }
  }
}
