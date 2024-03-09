import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Shared/Model/product.model';
import { CartServiceService } from 'src/app/Shared/Services/cart-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{

  cartItem:Product[]=[];
 public currentTab:any;
 public Product:Product;

  constructor(private service:CartServiceService,private activeRoute:ActivatedRoute,private router :Router)
  {

  }
  /**
   * This lifecycle hook is called after the component is initialized.
   * Retrieves the id parameter from the route snapshot to find the current tab
   * Retrive the product associated with the current tab from the cart services
   * @returns{void}
   */
  ngOnInit(): void {
    this.currentTab=this.activeRoute.snapshot.paramMap.get('id');
   this.Product= this.service.cartItems.at(this.currentTab)
    console.log(this.Product)
    
  }
  /**
   * 
   *Navigates to the Payment page using the router ['Payment']
   */
  navigatetoPayment()
  {
    this.router.navigate(['Payment'])
  }

}
