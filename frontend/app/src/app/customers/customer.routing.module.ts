import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard/auth.guard';
import { CustomerFormComponent } from './components/customer-form.component';
import { CustomerListComponent } from './components/customer-list.component';

const routes: Routes = [
  { path: 'customers/list', component: CustomerListComponent,canActivate: [AuthGuard] }, 
  { path: 'customers/form', component: CustomerFormComponent ,canActivate: [AuthGuard] }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
