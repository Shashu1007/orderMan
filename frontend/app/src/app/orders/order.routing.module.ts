import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './components/order-list.component';
import { OrderFormComponent } from './components/order-form.component';
import { AuthGuard } from '../auth/auth.guard/auth.guard';

const routes: Routes = [
  { path: 'orders/list', component: OrderListComponent,canActivate: [AuthGuard] }, 
  { path: 'orders/form', component: OrderFormComponent ,canActivate: [AuthGuard] }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {}
