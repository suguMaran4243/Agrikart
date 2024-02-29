import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartDataService } from '../Shared/Services/cartdata.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CartRoutingModule
    
  ],
  providers:[CartDataService]
})
export class CartModule { }
