import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'empresas', pathMatch: 'full' },
  { path: 'produtos', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'empresas', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
  { path: 'carrinho', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: 'pedidos', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
