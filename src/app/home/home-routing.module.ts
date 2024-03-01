import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent,AboutComponent,ProductComponent,ContactComponent,LoginComponent} from 'src/app/index';
import { CartComponent } from 'src/app/cart/cart.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Product',component:ProductComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Cart',component:CartComponent},
  {
    path:'Login',
    loadChildren:()=>import('src/app/login/login--routing.module').then((m)=>m.LoginRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }