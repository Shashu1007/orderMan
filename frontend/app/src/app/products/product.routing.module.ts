import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list.component';
import { ProductFormComponent } from './components/product-form.component';
import { AuthGuard } from '../auth/auth.guard/auth.guard';

const routes: Routes = [
  { path: 'products/list', component: ProductListComponent,canActivate: [AuthGuard] }, 
  { path: 'products/form', component: ProductFormComponent ,canActivate: [AuthGuard] }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
