import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Shared/Services/authentication.service';
import { LoginUserService } from 'src/app/Shared/Services/login-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public authService :AuthenticationService,public loginservice:LoginUserService,private router:Router)
  {

  }
  login()
  {
    this.authService.login();
  }
  logout()
  {
   this.authService.logout();
  }
get loggedInUser():string
{
  return this.loginservice.getLoggedInUser();
}
navigateToCart()
{
  this.router.navigate(['Cart']);
}
}
