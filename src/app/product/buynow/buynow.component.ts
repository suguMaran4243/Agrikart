import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/Shared/Services/agriculture-products.service';

@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.css']
})
export class BuynowComponent implements OnInit {

  private currentTab:string;
   product;
  constructor(private activeRoute:ActivatedRoute,private service :ProductService)
  {
    console.log("called")
  } 
  ngOnInit(): void {
    this.currentTab=this.activeRoute.snapshot.paramMap.get('id');
  this.product=this.service.products.find((x)=>x.id=== this.currentTab)
  }

}
