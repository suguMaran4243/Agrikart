import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { OrderComponent } from './order/order.component';
import { CartRoutingModule } from './cart-routing.module';


@NgModule({
  declarations: [CartComponent, OrderComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
