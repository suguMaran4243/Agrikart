import { Component, EventEmitter, Output } from '@angular/core';
import { CartDataService } from 'src/app/Shared/Services/cartdata.service';
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
  @Output() cartLength = new EventEmitter<number>();
  public cart: Product[] = [];
totalamount:number=0;
  tableHeaders = [
    {
      id: 'S.No',
      pId: 'Product id',
      productImage: 'Product Image',
      productName: 'Product Name',
      productPrize: 'Product Prize',
      productQuantity: 'Quantity',
      productCategory: 'Cateogory',
    },
  ];
  constructor(private service: CartDataService, private http: HttpClient,private cartService:CartServiceService,private router:Router) {}

  /*
  Fetches product data from the CartDataServices and update the cart.
  */
  public fetchdata() {
    this.service.getProducts().subscribe((data) => {
      this.cart = data;
    });
  }

  //Deletes entire product data in the CartdataService and updates the cart
  public deletedata() {
    
    this.service.deleteProducts().subscribe();
  }

  //Deletes particular product data in the  CartdataService and update the cart
  public deleteProduct(id: number) {
    this.service.deleteProduct(id).subscribe(
      () => {
        alert('Successfully deleted');
      },
      () => {
        alert('unable to delete');
      }
    );
  }
  getCartItems()
  {
     this.cart=this.cartService.getCartItems();
  }
  deleteproduct(id:number)
  {
    console.log(id)
    this.cartService.deleteFromCart(id);
  }
  cleardata()
  {
    this.cartService.clearProducts();
  }
  navigatetoOrder(id:number)
  { console.log(id)
    this.cartService.navigatetoOrder(id);
   
  }
  buyall()
  {


    this.cartService.cartItems.map((val)=>
    {
      this.totalamount+=val.product_prize*val.quantity
    })
     alert(this.totalamount)

   
    
  }
}
