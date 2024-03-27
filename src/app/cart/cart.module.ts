import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { OrderComponent } from './order/order.component';
import { CartRoutingModule } from './cart-routing.module';
import { CartServiceService } from '../Shared/Services/cart-service.service';
import { HttpClientModule } from '@angular/common/http';
import { PaymentmodeComponent } from './paymentmode/paymentmode.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CartComponent, OrderComponent, PaymentmodeComponent],
  imports: [CommonModule, CartRoutingModule, HttpClientModule,FormsModule],
  providers: [CartServiceService],
})
export class CartModule {}
