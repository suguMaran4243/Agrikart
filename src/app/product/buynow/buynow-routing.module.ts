import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BuynowComponent } from './buynow.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: '', component: BuynowComponent },
  {
    path: 'Payment',
    component: PaymentComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class BuynowRoutingModule {}
