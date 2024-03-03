import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartDataService } from 'src/app/Shared/Services/cartdata.service';
import { AuthenticationService } from 'src/app/login/Shared/Services/authentication.service';
import { LoginUserService } from 'src/app/login/Shared/Services/login-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  public cartLength:number;
  constructor(public authService :AuthenticationService,public loginservice:LoginUserService,private router:Router,private cartService:CartDataService)
  {
 
  }

  ngOnInit(): void {
    this.cartService.getProductsLength().subscribe((length)=>
    {
      this.cartLength=length;
    })
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
