import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { CartDataService } from '../../Services/cartdata.service';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    
  ],
  
  exports:[LayoutComponent],
  providers:[CartDataService]
  
})
export class LayoutModule { }
