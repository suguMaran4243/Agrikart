import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartDataService } from 'src/app/Shared/Services/cartdata.service';
import { AuthenticationService } from 'src/app/login/Shared/Services/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public cartLength: number;
  loginUsername: string;
  constructor(
    public authService: AuthenticationService,
    private router: Router,
    private cartService: CartDataService
  ) {}

  /**
   *  The ngOnit will invoke after the page gets loaded
   *
   * @returns {void}
   */

  ngOnInit(): void {
    this.cartService.getProductsLength().subscribe((length) => {
      this.cartLength = length;
    });
  }
  
  /**
   * Navigates to the Cart page using the router [routerLink='Home']
   * @returns {void}
   */

  navigateToCart() :void{
    this.router.navigate(['Cart']);
  }
}
