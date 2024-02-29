import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { CartDataService } from '../../Services/cartdata.service';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  
  exports:[LayoutComponent],
  providers:[CartDataService]
  
})
export class LayoutModule { }
