import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() cartLength=new EventEmitter<number>;
 public cart :Product[]=[];
  
  tableHeaders=[
    {
      id:'S.No',
      pId:'Product id',
      productImage:'Product Image',
      productName:'Product Name',
      productPrize:'Product Prize',
      productCategory:'Cateogory'
    }
  ]
  constructor(private service :CartDataService,private http:HttpClient)
  {
   
  }
  
 public fetchdata()
  {
     this.service.getProducts().subscribe((data)=>
     {
      this.cart=data
     })
  }
public deletedata()
  {
    console.log("Calling entire delete")
 
    this.service.deleteProducts().subscribe(()=>
    {
      console.log('deleted');
    })
  
  }
public deleteProduct(id:string)
  {
    
   this.service.deleteProduct(id).subscribe((del)=>
   {
     alert('Successfully deleted');
   },
   (error)=>
   {
    alert('unable to delete')
   });
  }
  

}
