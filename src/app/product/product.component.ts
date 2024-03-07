import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductTabService } from './Shared/Services/product-tab.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  public tabs = [];

  constructor(private route: Router, private service: ProductTabService) {
    this.tabs = this.service.cardsData;
    console.log("Hi")
  }
  public navigateto(id: string) {
    this.route.navigate(['/Agri', id]);
  }
}
