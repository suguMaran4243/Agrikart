import { Injectable } from '@angular/core';
import { Product } from '../Model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private cartItems:Product[]=[];
  constructor() {
    // Load cart items from local storage on service initialization
    this.fetchLocalStorage();
  
  }
 private fetchLocalStorage()
  {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cartItems = JSON.parse(storedCart);
  }

}
private savetoLocalStorage()
{
  localStorage.setItem('cart',JSON.stringify(this.cartItems))
}

 

  addToCart(product:Product)
  {
    const existingProductid=this.cartItems.findIndex((x)=>x.id === product.id)
    console.log(existingProductid)
   if(existingProductid !=-1)
   
   {
    this.cartItems[existingProductid].quantity+=1;

   }
   else
   {
    this.cartItems.push(product)
   
   }
   console.log(this.cartItems)
    // localStorage.setItem('cart',JSON.stringify(this.cartItems))
    this.savetoLocalStorage();
    
   }
     
  getCartItems()
  {
    return this.cartItems;
  }
  deleteFromCart(id:number):void
  {
    console.log("hi")
       this.cartItems.splice(id,1);
       this.savetoLocalStorage();
  }
  clearProducts()
  {
    this.cartItems=[];

    this.savetoLocalStorage();
  }
}
