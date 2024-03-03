import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgriRoutingModule } from './agri-routing.module';
import { AgriComponent } from './agri.component';
import { LayoutModule } from 'src/app/Shared/components/layout/layout.module';

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
