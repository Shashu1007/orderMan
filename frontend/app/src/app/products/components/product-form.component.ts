import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product, Uom } from '../models/product.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Input() productId?: number;
  productForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
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
      const productData: Product = this.productForm.value;

      if (this.productId) {
        this.productService.updateProduct(this.productId, productData).subscribe(() => {
          this.router.navigate(['/products']);
        });
      } else {
        this.productService.createProduct(productData).subscribe(() => {
          this.router.navigate(['/products']);
        });
      }
    }
  }
}
