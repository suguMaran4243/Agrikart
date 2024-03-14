import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart.component';
import { AuthGuard } from '../login/Shared/Guard/auth.guard';

const routes: Routes = [
  { path: 'Cart', component: CartComponent ,canActivate:[AuthGuard]},
  { path: 'Order/:id', component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
