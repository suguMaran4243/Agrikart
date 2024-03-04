import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { CartComponent } from '../cart/cart.component';
import { ProductTabService } from './Shared/Services/product-tab.service';
import { BuyNowModule } from './buynow/buynow.module';
import { LoginGuardService } from '../Shared/Services/login-guard.service';

@NgModule({
  declarations: [ProductComponent, CartComponent],
  imports: [CommonModule, ProductRoutingModule, RouterModule, BuyNowModule],
  providers: [ProductTabService,LoginGuardService],
})
export class ProductModule {}
