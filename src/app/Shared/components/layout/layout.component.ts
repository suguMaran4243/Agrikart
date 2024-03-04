import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/agriculture-products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartDataService } from '../../Services/cartdata.service';

import { Product } from 'src/app/Shared/Model/product.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  products = [];

  public currentTab: string;

  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
    private cartservice: CartDataService,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.currentTab = this.route.snapshot.paramMap.get('id');
    this.products = this.service.products.filter(
      (x) => x.product_category === this.currentTab
    );
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
