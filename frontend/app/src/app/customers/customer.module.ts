import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Add this import
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {  MatDatepickerModule } from '@angular/material/datepicker';
import { CustomerFormComponent } from './components/customer-form.component';
import { CustomerListComponent } from './components/customer-list.component';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { CustomerRoutingModule } from './customer.routing.module';

@NgModule({
  declarations: [CustomerFormComponent, CustomerListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule, 
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatOptionModule,
    CustomerRoutingModule
    
  ],
  exports: [CustomerListComponent, CustomerFormComponent]
})
export class CustomerModule {}
