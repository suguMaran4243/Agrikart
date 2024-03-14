import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/Shared/Services/cart-service.service';
import { AuthenticationService } from 'src/app/login/Shared/Services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent{
  public cartLength: number;
  loginUsername: string;
  constructor(
    public authService: AuthenticationService,
    private router: Router,
    private cartService: CartServiceService
  ) {
    this.cartService.cartItemsSubject.subscribe((len)=>
    {
      this.cartLength=len
      console.log(this.cartLength)
    })
  }
  


  /**
   *  The ngOnit will invoke after the page gets loaded
   *
   * @returns {void}
   */
  
   
  
  /**
   * Navigates to the Cart page using the router [routerLink='Home']
   * @returns {void}
   */
  navigateToCart(): void {
    this.router.navigate(['Cart']);
  }
  
}
