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
  // {path:'',component:HomeComponent},
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Product', component: ProductComponent },
  {
    path: 'Contact',
    component: ContactComponent,
    canDeactivate: [CanDeactivateServices],
  },

  {
    path: 'Cart',
    loadChildren: () =>
      import('src/app/cart/cart.module').then((m) => m.CartModule),
    canActivate: [AuthGuard],
  },
  { path: 'Login', component: LoginComponent },
  {
    path: 'Signup',
    loadChildren: () =>
      import('src/app/login/signup/signup.module').then((m) => m.SignupModule),
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
