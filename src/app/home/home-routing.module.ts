import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HomeComponent,
  AboutComponent,
  ProductComponent,
  ContactComponent,
  LoginComponent,
} from 'src/app/index';
import { AuthGuard } from '../login/Shared/Guard/auth.guard';
import { CanDeactivateServices } from '../contact/Shared/Services/canDeactivate.services';
import { NotfoundComponent } from '../notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Agrikart-Home' },
  { path: 'about', component: AboutComponent, title: 'Agrikart-About' },
  { path: 'product', component: ProductComponent, title: 'Agrikart-Product' },
  {
    path: 'contact',
    component: ContactComponent,
    canDeactivate: [CanDeactivateServices],
    title: 'Agrikart-Contact',
  },

  {
    path: 'cart',
    loadChildren: () =>
      import('src/app/cart/cart.module').then((m) => m.CartModule),
    canActivate: [AuthGuard],
    title: 'Agrikart-Cart',
  },
  { path: 'login', component: LoginComponent, title: 'Agrikart-Login' },
  {
    path: 'signup',
    loadChildren: () =>
      import('src/app/login/signup/signup.module').then((m) => m.SignupModule),
    title: 'Agrikart-Signup',
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
