import { Component, Injectable, OnInit } from '@angular/core';
import { ProductService } from '../../Services/agriculture-products.service';
import { AgriComponent } from 'src/app/product/agri/agri.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  providers:[AgriComponent]
})
@Injectable()
export class LayoutComponent implements OnInit{
  products=[];

  currentTab;
  currentType;
  constructor(private route:ActivatedRoute,private service:ProductService)
  {
    // this.products=this.service.products
    
  }
ngOnInit(): void {

  this.currentTab=this.route.snapshot.paramMap.get('id');
  this.products=this.service.products.filter((x)=>x.product_category === this.currentTab)
 
}
  
  

}
