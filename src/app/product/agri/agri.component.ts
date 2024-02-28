import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Shared/Services/agriculture-products.service';

@Component({
  selector: 'app-agri',
  templateUrl: './agri.component.html',
  styleUrls: ['./agri.component.css']
})
export class AgriComponent implements OnInit{

  products=[];
  constructor(private service:ProductService)
  {
    console.log('called')
    
  }
  ngOnInit(): void {
    this.products=this.service.products
  }

}
