import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { LoginModule } from '../login.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignupComponent
   
  ],
  imports: [
    CommonModule,
  ReactiveFormsModule,
    LoginModule,
    
  ]
})


export class SignupModule{

}