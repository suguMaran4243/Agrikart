import { Injectable, OnInit} from '@angular/core';
import { Product } from '../Model/product.model';
import { Router } from '@angular/router';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService implements OnInit {
  public cartItems: Product[] = [];
  public cartLength;
  public cartItemsSubject: BehaviorSubject<number>=new BehaviorSubject<number>(0);
  constructor(private router: Router) {
    this.fetchLocalStorage();
    this.cartLength = this.cartItems.length;
    this.cartItemsSubject.next(this.cartLength)
  }
  ngOnInit(): void {
   
    console.log(this.cartLength)
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
      this.cartItemsSubject.next(this.cartItems.length);
    }

    console.log(this.cartItems);
    this.savetoLocalStorage();
  }

  getCartItems() {
    this.cartItemsSubject.next(this.cartItems.length);
    return this.cartItems;

    console.log(this.cartItems);
  }
  deleteFromCart(id: number): void {
    console.log('hi');
    this.cartItems.splice(id, 1);
    this.savetoLocalStorage();
    this.cartItemsSubject.next(this.cartItems.length);
  }
  clearProducts() {
    this.cartItems = [];

    this.savetoLocalStorage();
  }

  navigatetoOrder(id: number) {
    // const itemid=this.cartItems.at(id).id;
    this.router.navigate(['/Order', id]);
  }
}
