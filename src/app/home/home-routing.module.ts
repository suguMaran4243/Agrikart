import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent,AboutComponent,ProductComponent,ContactComponent, LoginComponent} from 'src/app/index';
import { CartComponent } from 'src/app/cart/cart.component';
import { AuthGuard } from '../login/Shared/Guard/auth.guard';
import { CanDeactivateServices } from '../contact/Shared/Services/canDeactivate.services';

const routes: Routes = [
  // {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Product',component:ProductComponent},
  {path:'Contact',component:ContactComponent,canDeactivate:[CanDeactivateServices]},
  // {path:'Cart',component:CartComponent,canActivate:[AuthGuard]},
  {
    path:'Cart',
    loadChildren:()=>import('src/app/cart/cart.module').then((m)=>m.CartModule),
    canActivate:[AuthGuard]
  },
  {path:'Login',component:LoginComponent},
  {
    path:'Signup',
    loadChildren:()=>import('src/app/login/signup/signup.module').then((m)=>m.SignupModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
