import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Shared/Services/agriculture-products.service';

@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.css'],
})
export class BuynowComponent implements OnInit {
  private currentTab: number;
 public product:any;
 public countValue :number=1;

  constructor(
    private activeRoute: ActivatedRoute,
    private service: ProductService,
    private router:Router
  ) {
    console.log('called');
  }
  ngOnInit(): void {
    this.currentTab = +this.activeRoute.snapshot.paramMap.get('id');
    this.product = this.service.products.find((x) => x.id === this.currentTab);
  }
  increment()
  {
      this.countValue++;
  }
  decrement()
  {
    if(this.countValue>1)
    this.countValue--;
  else
  {
    alert('Minimum quantity should be >1')
  }
  }
  navigateToPayment()
  {
    this.router.navigate(['Payment'])
  }
}
