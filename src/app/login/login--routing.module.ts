import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const routes:Routes=[
  {path:'',component:LoginComponent},
  {
    path:'Signup',
    loadChildren:()=>import('./signup/signup--routing.module').then((m)=>m.SignupRoutingModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginRoutingModule { }
