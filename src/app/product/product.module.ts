import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductTabService } from './Shared/Services/product-tab.service';
import { BuyNowModule } from './buynow/buynow.module';
import { CartModule } from '../cart/cart.module';




@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, ProductRoutingModule, RouterModule, BuyNowModule,CartModule],
  providers: [ProductTabService]
 
})
export class ProductModule {}
