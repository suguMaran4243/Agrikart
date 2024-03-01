import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { CartComponent } from '../cart/cart.component';
import { ProductTabService } from './Shared/Services/product-tab.service';




@NgModule({
  declarations: [ProductComponent, CartComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    RouterModule,
    
  ],
  providers:[ProductTabService]
})
export class ProductModule { }
