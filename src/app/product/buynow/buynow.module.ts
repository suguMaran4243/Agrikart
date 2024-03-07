import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuynowComponent } from './buynow.component';
import { BuynowRoutingModule } from './buynow-routing.module';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
    declarations:[BuynowComponent, PaymentComponent],
    imports:[CommonModule,BuynowRoutingModule],
})
export class BuyNowModule{

}