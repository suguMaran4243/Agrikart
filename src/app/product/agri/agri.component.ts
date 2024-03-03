import { Component,Injectable } from '@angular/core';
import { ProductService } from 'src/app/Shared/Services/agriculture-products.service';
@Component({
  selector: 'app-agri',
  templateUrl: './agri.component.html',
  styleUrls: ['./agri.component.css']
})
@Injectable()
export class AgriComponent{

  product=[];
  
  constructor(private service:ProductService)
  {
    this.product=this.service.products
  }
 

  

}
