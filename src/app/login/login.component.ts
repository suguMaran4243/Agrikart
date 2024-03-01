import { Component, Injectable } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { Form, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { LoginDataService } from './Shared/Services/login-data.service';
import { AuthenticationService } from './Shared/Services/authentication.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginUserService } from './Shared/Services/login-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent implements OnInit{
 
 username:string='';
 password:string='';
 loginForm:FormGroup;

constructor(public service :LoginDataService,public authService:AuthenticationService,public router:Router,public loginuser:LoginUserService)
{

}
 
  ngOnInit(): void {
    this.loginForm=new FormGroup(
      {
        username:new FormControl(null,[Validators.required]),
        password:new FormControl(null,[Validators.required]),

      }
      
    )
    
    
    
  }
   
  
  
  Login()
  {
    this.username=this.loginForm.get('username').value;
    this.password=this.loginForm.get('password').value;
    console.log(this.username+' '+this.password)
    this.authService.authenticate(this.username,this.password).subscribe(
      (authenticated)=>
      {
        if(authenticated)
        {
          alert('login successfull');
          this.router.navigate(['Home']);
        }
        else
        {
          alert('Please signup before login')
        }
      }
    )
    this.loginuser.setLoggedInUser(this.username);
    
  }

}
