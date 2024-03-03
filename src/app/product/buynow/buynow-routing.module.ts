import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BuynowComponent } from './buynow.component';

const routes:Routes=[
  {path:'',component:BuynowComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
   
  ],

  exports: [RouterModule]
})
export class BuynowRoutingModule { }
