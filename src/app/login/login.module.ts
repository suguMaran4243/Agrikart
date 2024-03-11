import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './Shared/Services/authentication.service';
import { DataService } from './Shared/Services/dataservice.service';
import { LoginComponent } from './login.component';
import { SignupModule } from './signup/signup.module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import {AuthenticationInterceptor } from '../interceptors/authentication.interceptor'

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SignupModule,HttpClientModule],
  exports: [LoginComponent],
  providers: [AuthenticationService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthenticationInterceptor ,
      multi:true,
    }, DataService],
})
export class LoginModule {}
