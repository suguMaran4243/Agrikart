import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { AuthGuard } from '../login/Shared/Guard/auth.guard';

const routes: Routes = [
  { path: '', component: ProductComponent },

  {
    path: 'Agri/:id',
    loadChildren: () => import('./agri/agri.module').then((m) => m.AgriModule),
    canActivate:[AuthGuard]
    
  },
  {
    path: 'Buy/:id',
    loadChildren: () =>
      import('./buynow/buynow.module').then((m) => m.BuyNowModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
