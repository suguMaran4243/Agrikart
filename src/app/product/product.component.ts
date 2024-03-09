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
  /**
   * Navigates to the specific route 'Agri' module ,passing an identifier as a route parameter
   * Uses Angular router to a specified route
   * @param id 
   * @returns {void}
   */
  public navigateto(id: string) :void{
    this.route.navigate(['/Agri', id]);
  }
}
