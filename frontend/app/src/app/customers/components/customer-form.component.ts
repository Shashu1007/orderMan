import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  @Input() customerId?: number;
  customerForm!: FormGroup;
  minDate = new Date(1900, 0, 1);  
  maxDate = new Date(); 

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private router: Router
  ) {this.customerForm = this.fb.group({
    name: [''],
    phoneNumber: [''],
    email: [''],
    address: [''],
    dob: ['']
  });}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
      dob: ['', Validators.required]
    });

    if (this.customerId) {
      this.loadCustomer(this.customerId);
    }
  }

  loadCustomer(id: number): void {
  }

  onSubmit(): void {
    if (this.customerForm.valid) {
      const customerData: Customer = this.customerForm.value;

      if (this.customerId) {
        this.customerService.updateCustomer(this.customerId, customerData).subscribe(() => {
          this.router.navigate(['/customers/list']);
        });
      } else {
        this.customerService.createCustomer(customerData).subscribe(() => {
          this.router.navigate(['/customers']);
        });
      }
    }
  }
}
