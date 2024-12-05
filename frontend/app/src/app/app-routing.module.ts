import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReportsComponent } from './components/reports/reports.component';
import { AuthGuard } from './auth/auth.guard/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegisterComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../app/components/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/order.module').then(m => m.OrdersModule),
    canActivate: [AuthGuard],
  },

  
  {
    path: 'products',





    loadChildren: () =>
      import('./products/product.module').then(m => m.ProductModule),
    canActivate: [AuthGuard],
  },

  
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customer.module').then(m => m.CustomerModule),
    canActivate: [AuthGuard],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
