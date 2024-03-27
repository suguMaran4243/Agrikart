import { Component } from '@angular/core';
import { Product } from '../Shared/Model/product.model';
import { HttpClient } from '@angular/common/http';
import { CartServiceService } from '../Shared/Services/cart-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  public cart: Product[] = [];
  private totalAmount = 0;
  public currentDate: Date = new Date();
  public tableHeaders = [
    {
      id: 'S.No',
      pId: 'Product id',
      productImage: 'Product Image',
      productName: 'Product Name',
      productPrize: 'Product Prize',
      orderDate: 'Date',
      productQuantity: 'Quantity',
      productCategory: 'Cateogory',
    },
  ];
  constructor(
    private http: HttpClient,
    private cartService: CartServiceService,
    private router: Router
  ) {}

  /**
   * Returns and updates the cart by fetching the data from the cart service.
   * @returns{void}
   */
  public getCartItems(): void {
    this.cart = this.cartService.getCartItems();
  }

  /**
   * Deletes particular from the cart based on the id provided in the cart service
   * @param id
   * @returns{void}
   */

  public deleteProduct(id: number): void {
    console.log(id);
    this.cartService.deleteFromCart(id);
  }
  /**
   * Clear all products in the cart in the cart service
   * @returns {void}
   */
  public clearProducts(): void {
    this.cartService.clearProducts();
  }
  /**
   * Navigates to the order page associated with a specific identifier.
   * @param id
   * @returns{void}
   */
  public navigateToOrder(id: number): void {
    this.cartService.navigatetoOrder(id);
  }
  /**
   * Calculates the total amount for all items in the cart and displays an alert.
   * Uses the cart service to retrieve cart items and calculate the total amount.
   * @returns{void}
   */
  public buyAll(): void {
    this.cartService.cartItems.map((val) => {
      this.totalAmount += val.product_prize * val.quantity;
    });
    alert(this.totalAmount);
  }
}
