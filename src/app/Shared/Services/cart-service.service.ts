import { Injectable} from '@angular/core';
import { Product } from '../Model/product.model';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  public cartItems: Product[] = [];
 
  public cartItemsSubject: BehaviorSubject<number> =
    new BehaviorSubject<number>(this.cartItems.length);
  constructor(private router: Router) {
    this.fetchLocalStorage();
    this.cartItemsSubject.next(this.cartItems.length);
  }
  private fetchLocalStorage() {
    const storedCart = sessionStorage.getItem('cart');
    if (storedCart) {
      this.cartItems = JSON.parse(storedCart);
    }
  }
  savetoLocalStorage() {
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
      this.cartItemsSubject.subscribe((len) => {
        console.log(len);
      });
    }

    console.log(this.cartItems);
    this.savetoLocalStorage();
  }

  getCartItems() {
    return this.cartItems;
    this.cartItemsSubject.next(this.cartItems.length);

    console.log(this.cartItems);
  }
  deleteFromCart(id: number): void {
    this.cartItems.splice(id, 1);
    this.savetoLocalStorage();
    this.cartItemsSubject.next(this.cartItems.length);
  }

  clearProducts() {
    this.cartItems = [];
    console.log(this.cartItems);
    this.savetoLocalStorage();
    this.cartItemsSubject.next(this.cartItems.length);
  }

  navigatetoOrder(id: number) {
    // const itemid=this.cartItems.at(id).id;
    this.router.navigate(['/order', id]);
  }
}
