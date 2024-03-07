import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const routes:Routes=[
  // {path:'',component:LoginComponent},
  // {
  //   path:'Signup',
  //   loadChildren:()=>import('./signup/signup.module').then((m)=>m.SignupModule)
  // }
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
