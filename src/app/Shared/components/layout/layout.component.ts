import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/agriculture-products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartDataService } from '../../Services/cartdata.service';

import { Product } from 'src/app/Shared/Model/product.model';
import { HttpClient } from '@angular/common/http';
import { CartServiceService } from '../../Services/cart-service.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  products = [];

  public currentTab: string;
  countVal:number=1;

  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
    private cartservice: CartDataService,
    private http: HttpClient,
    private router: Router,
    private cartService:CartServiceService
  ) {

  }


  /*ngOnit will invoked after the content of this component rendred.

  *currentTab will get the id of the current activates route

  *products will match with current tab id and assign with product
  */
  ngOnInit(): void {
    this.currentTab = this.route.snapshot.paramMap.get('id');
    this.products = this.service.products.filter(
      (x) => x.product_category === this.currentTab
    );
  }
addToCart(product:Product)
{
   this.cartService.addToCart(product);
   console.log('pushed')
}
  addtoCart(product: Product) {
    this.cartservice.addTocart(product).subscribe((data) => {
      console.log(data);
    });
  }
  navigatetoBuynow(id: number) {
    console.log('HI');
    console.log(id)
    console.log(typeof(id))
    this.router.navigate(['/Buy', id]);

  }
 

}
