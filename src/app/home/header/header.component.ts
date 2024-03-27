import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/Shared/Services/cart-service.service';
import { AuthenticationService } from 'src/app/login/Shared/Services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public cartLength: number;
  constructor(
    public authService: AuthenticationService,
    private router: Router,
    private cartService: CartServiceService
  ) {}
  ngOnInit(): void {
    this.cartService.cartItemsSubject.subscribe((len) => {
      this.cartLength = len;
      console.log(this.cartLength);
    });
  }
   /**
    * This method will logout the session and clear all products
    * @returns {void}
    */
  public logout() :void{
    this.authService.logout();
    this.cartService.clearProducts();
  }
}
