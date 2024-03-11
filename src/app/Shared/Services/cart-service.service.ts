import { Injectable } from '@angular/core';
import { Product } from '../Model/product.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  public cartItems: Product[] = [];
 
  constructor(private router: Router) {
    // Load cart items from local storage on service initialization
    this.fetchLocalStorage();
  }
  private fetchLocalStorage() {
    const storedCart = sessionStorage.getItem('cart');
    if (storedCart) {
      this.cartItems = JSON.parse(storedCart);
    }
  }
  private savetoLocalStorage() {
    sessionStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  addToCart(product: Product) {
    
    const existingProductid = this.cartItems.findIndex(
      (x) => x.id === product.id
    );
    console.log(existingProductid);
    if (existingProductid != -1) {
      this.cartItems[existingProductid].quantity += 1;
    } else {
      this.cartItems.push(product);
      
    }
    
    console.log(this.cartItems);
    this.savetoLocalStorage();
  }

  getCartItems() {
    return this.cartItems;
    console.log(this.cartItems)
  }
  deleteFromCart(id: number): void {
    console.log('hi');
    this.cartItems.splice(id, 1);
    this.savetoLocalStorage();
  }
  clearProducts() {
    this.cartItems = [];

    this.savetoLocalStorage();
  }

  navigatetoOrder(id: number) {
    // const itemid=this.cartItems.at(id).id;
    this.router.navigate(['/Order', id]);
  }
  getCartLength()
  {
    return this.cartItems.length
  }
  
}
