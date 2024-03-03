import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login--routing.module';
import { LoginDataService } from './Shared/Services/login-data.service';
import { AuthenticationService } from './Shared/Services/authentication.service';
import { LoginUserService } from './Shared/Services/login-user.service';
import { DataService } from './Shared/Services/dataservice.service';


@NgModule({
  declarations: [
    SignupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule
    

    
    
    
  ],
  exports:[SignupComponent],
  providers:[LoginDataService,AuthenticationService,LoginUserService,DataService]
})
export class LoginModule { }
