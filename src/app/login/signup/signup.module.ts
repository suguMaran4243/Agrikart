import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../login.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';
import { SignupRoutingModule } from './signup--routing.module';

@NgModule({
  declarations: [
  SignupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SignupRoutingModule
    
  ],
  exports:[SignupComponent]
  
})
export class SignupModule{

}