import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { LayoutModule } from '../Shared/components/layout/layout.module';
// import { LayoutComponent } from '../Shared/components/layout/layout.component';


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    RouterModule,
    LayoutModule
  ]
})
export class ProductModule { }
