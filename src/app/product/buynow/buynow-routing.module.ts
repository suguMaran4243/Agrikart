import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BuynowComponent } from './buynow.component';
import { PaymentComponent } from './payment/payment.component';
import { AuthGuard } from 'src/app/login/Shared/Guard/auth.guard';

const routes: Routes = [
  { path: '', component: BuynowComponent },
  {
    path: 'payment',
    component: PaymentComponent,
    canActivate:[AuthGuard]
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class BuynowRoutingModule {}
