import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductTabService } from '../Shared/Services/product-tab.service';
// import { LayoutComponent } from '../Shared/components/layout/layout.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
  
})
export class ProductComponent {
 
   tabs=[];
 
  constructor(private route :Router,private service :ProductTabService)
  {
   this.tabs=this.service.cardsData
  }
  navigateto(id:string)
  {
   this.route.navigate(['/Agri',id]);
  }
  
  


}
