import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgriRoutingModule } from './agri-routing.module';
import { AgriComponent } from './agri.component';
import { LayoutModule } from 'src/app/Shared/components/layout/layout.module';
import { ProductService } from 'src/app/Shared/Services/agriculture-products.service';

@NgModule({
  declarations: [
    AgriComponent
  ],
  imports: [
    CommonModule,
    AgriRoutingModule,
    LayoutModule
  ]
})
export class AgriModule  {
 }
