import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { OrderComponent } from './order/order.component';
import { CartRoutingModule } from './cart-routing.module';
import { CartServiceService } from '../Shared/Services/cart-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [CartComponent, OrderComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    HttpClientModule
  ],
  providers:[CartServiceService]
})
export class CartModule { }
