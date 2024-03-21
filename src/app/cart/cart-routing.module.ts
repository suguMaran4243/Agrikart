import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart.component';
import { AuthGuard } from '../login/Shared/Guard/auth.guard';

const routes: Routes = [
  { path: 'cart', component: CartComponent,canActivate:[AuthGuard]},
  { path: 'order/:id', component: OrderComponent,canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
