import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "src/app/Model/product.model";

@Injectable()
export class CartDataService
{
  private apiUrl='http://localhost:3000';
    constructor(private http:HttpClient)
    {

    }
    public cart:Product[]=[];

    addTocart(product:Product)
    {
        this.cart.push(product);
        console.log(this.cart)
    }


    getProducts():Observable<Product[]>
    {
      return this.http.get<Product[]>(`${this.apiUrl}/cart`);
    }
    deleteProducts():Observable<any>
    {
        return this.http.delete<any>(`${this.apiUrl}/cart`);
    }
}