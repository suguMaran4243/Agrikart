import { Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { LoginDataService } from './Shared/Services/login-data.service';
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
