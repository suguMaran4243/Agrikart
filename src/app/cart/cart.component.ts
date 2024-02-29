import { Component, OnInit } from '@angular/core';
import { CartDataService } from 'src/app/Shared/Services/cartdata.service';
import { Product } from '../Model/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{

  cart :Product[]=[];
  constructor(private service :CartDataService,private http:HttpClient)
  {
   
  }
  
  fetchdata()
  {
     this.service.getProducts().subscribe((data)=>
     {
      this.cart=data
     })
  }
  deletedata()
  {
    this.service.deleteProducts().subscribe(()=>
    {
      console.log('deleted');
    })
  }
  

}
