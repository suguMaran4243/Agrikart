import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Shared/Model/product.model';
import { ProductService } from 'src/app/Shared/Services/agriculture-products.service';

@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.css'],
})
export class BuynowComponent implements OnInit {
  private currentTab: number;
  public product: Product;
  public countValue = 1;

  constructor(
    private activeRoute: ActivatedRoute,
    private service: ProductService,
    private router: Router
  ) {
    console.log('called');
  }
  /**
   * This lifecycle hook is called after the component is initilaized
   * Retrieves the 'id' parameter from the route snapshot to determine the current tab
   * Converts the 'id' parameter to a number for proper comparison
   * @returns {void}
   */
  ngOnInit(): void {
    this.currentTab = +this.activeRoute.snapshot.paramMap.get('id');
    this.product = this.service.products.find((x) => x.id === this.currentTab);
  }
  /**
   * Increments the value of the 'countValue' property
   * Increases the count value by one.
   * @returns {void}
   */
  increment(): void {
    this.countValue++;
  }
  /**
   * Decrements the value of the 'counterValue' property
   * Decreases the count value by one
   * @returns {void}
   */
  decrement(): void {
    if (this.countValue > 1) this.countValue--;
    else {
      alert('Minimum quantity should be >1');
    }
  }
  /**
   * Navigates to the payment page using router
   */
  navigateToPayment() {
    this.router.navigate(['paymode']);
  }
}
