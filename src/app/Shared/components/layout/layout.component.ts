import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/agriculture-products.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from 'src/app/Shared/Model/product.model';
import { HttpClient } from '@angular/common/http';
import { CartServiceService } from '../../Services/cart-service.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  products = [];
  filteredProducts = [];

  public currentTab: string;
  countVal = 1;

  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
    private http: HttpClient,
    private router: Router,
    private cartService: CartServiceService
  ) {}
  searchProduct: string;
  /**
   * This lifecycle hook will get invoked after the componnet gets initialized
   * currentTab will gets the active route using snapshot propert
   * Filters the products in the service based on the current tab's category.
   * Initializes both the 'products' and 'filteredProducts' properties with the filtered products.
   * @returns {void}
   */
  ngOnInit(): void {
    this.currentTab = this.route.snapshot.paramMap.get('id');
    this.products = this.service.products.filter(
      (x) => x.product_category === this.currentTab
    );
    this.filteredProducts = [...this.products];
  }
  /**
   * Adds a product to the shopping cart using the CartService.
   * Calls the 'addToCart' method from the CartService to include the specified product.
   * @param {Product} product - The product to be added to the shopping cart.
   * @returns {void}
   */

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    console.log('pushed');
  }
  // addtoCart(product: Product) {
  //   this.cartservice.addTocart(product).subscribe((data) => {
  //     console.log(data);
  //   });
  // }
  /**
   * Navigates to the buyNow module using the router to the specific id
   * @param id
   */
  navigatetoBuynow(id: number) {
    console.log('HI');
    console.log(id);
    console.log(typeof id);
    this.router.navigate(['/Buy', id]);
  }
  onSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const keyword = inputElement.value;

    this.filteredProducts = this.products.filter((product) =>
      product.product_name.toLowerCase().includes(keyword.toLowerCase())
    );
  }
}
