import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FertilizerRoutingModule } from './fertilizer-routing.module';
import { FertilizerComponent } from './fertilizer.component';


@NgModule({
  declarations: [
    FertilizerComponent
  ],
  imports: [
    CommonModule,
    FertilizerRoutingModule
  ]
})
export class FertilizerModule { }
