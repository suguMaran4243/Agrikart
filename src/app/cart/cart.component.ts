import { Component, EventEmitter, Output } from '@angular/core';
import { CartDataService } from 'src/app/Shared/Services/cartdata.service';
import { Product } from '../Shared/Model/product.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  @Output() cartLength = new EventEmitter<number>();
  public cart: Product[] = [];

  tableHeaders = [
    {
      id: 'S.No',
      pId: 'Product id',
      productImage: 'Product Image',
      productName: 'Product Name',
      productPrize: 'Product Prize',
      productCategory: 'Cateogory',
    },
  ];
  constructor(private service: CartDataService, private http: HttpClient) {}

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
    
    this.service.deleteProducts().subscribe(() => {
      
    });
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
}
