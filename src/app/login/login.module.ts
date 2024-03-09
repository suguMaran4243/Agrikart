import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './Shared/Services/authentication.service';
import { DataService } from './Shared/Services/dataservice.service';
import { LoginComponent } from './login.component';
import { SignupModule } from './signup/signup.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SignupModule],
  exports: [LoginComponent],
  providers: [AuthenticationService, DataService],
})
export class LoginModule {}
