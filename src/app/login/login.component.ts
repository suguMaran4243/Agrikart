import { Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { AuthenticationService } from './Shared/Services/authentication.service';
import { Router } from '@angular/router';
import { LoginUserService } from './Shared/Services/login-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
 
 username='';
 password='';
 loginForm:FormGroup;
constructor(public authService:AuthenticationService,public router:Router,public loginuser:LoginUserService)
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
    this.authService.authenticate(this.username,this.password).subscribe(
      (authenticated:any)=>
      {
        if(authenticated)
        {
          
        
          alert('login successfull');
          this.router.navigate(['Home']);
        }
        else
        {
          alert('Please signup before login')
          this.router.navigate(['Signup'])
        }
      }
    )
    this.loginuser.setLoggedInUser(this.username);
    
  }
  navigateToSignup()
  {
    this.router.navigate(['Signup'])
  }

}
