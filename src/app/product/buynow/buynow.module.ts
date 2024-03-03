import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuynowComponent } from './buynow.component';
import { BuynowRoutingModule } from './buynow-routing.module';

@NgModule({
    declarations:[BuynowComponent],
    imports:[CommonModule,BuynowRoutingModule],
})
export class BuyNowModule{

}