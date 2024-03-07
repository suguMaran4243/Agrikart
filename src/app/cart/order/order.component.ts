import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Shared/Model/product.model';
import { CartServiceService } from 'src/app/Shared/Services/cart-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{

  cartItem:Product[]=[];
  currentTab;
  Product;

  constructor(private service:CartServiceService,private activeRoute:ActivatedRoute)
  {

  }
  ngOnInit(): void {
    this.currentTab=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.currentTab);
   this.Product= this.service.cartItems.at(this.currentTab)
    console.log(this.Product)
    
  }
  

}
