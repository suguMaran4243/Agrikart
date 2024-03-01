import { Component, Injectable, OnInit, createNgModule } from '@angular/core';
import { ProductService } from '../../Services/agriculture-products.service';
import { AgriComponent } from 'src/app/product/agri/agri.component';
import { ActivatedRoute } from '@angular/router';
import { CartDataService } from '../../Services/cartdata.service';

import { Product } from 'src/app/Model/product.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  
})
@Injectable()
export class LayoutComponent implements OnInit{
  products=[];

  currentTab;
  currentType;
  constructor(private route:ActivatedRoute,private service:ProductService,private cartservice:CartDataService,private http:HttpClient)
  {
    
  }
ngOnInit(): void {

  this.currentTab=this.route.snapshot.paramMap.get('id');
  this.products=this.service.products.filter((x)=>x.product_category === this.currentTab)
 
}

addtoCart(product:Product)
{
  this.cartservice.addTocart(product).subscribe((data)=>
  {

  })

  
}
  
  

}
