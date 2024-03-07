import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login--routing.module';
import { AuthenticationService } from './Shared/Services/authentication.service';
import { LoginUserService } from './Shared/Services/login-user.service';
import { DataService } from './Shared/Services/dataservice.service';
import { LoginComponent } from './login.component';
import { SignupModule } from './signup/signup.module';



@NgModule({
  declarations: [LoginComponent,
    // SignupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
 
    

    
    
    
  ],
  exports:[LoginComponent],
  providers:[AuthenticationService,LoginUserService,DataService]
})
export class LoginModule { }
