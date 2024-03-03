import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, of } from "rxjs";
import { Product } from "src/app/Model/product.model";


@Injectable()
export class CartDataService
{
  
  private apiUrl='http://localhost:3000';
    constructor(private http:HttpClient)
    {
     
    }
    
    public cart:Product[]=[];

    cartItems:Observable<any>;

    

  public  addTocart(product:Product):Observable<Product>
    {
      
      let headers:HttpHeaders=new HttpHeaders();
      headers=headers.set('Accept','application/json');
       return this.http.post<Product>(`${this.apiUrl}/cart`,product,{headers})  
    }


 public getProducts():Observable<Product[]>
    {
      this.cartItems=this.http.get<any []>(`${this.apiUrl}/cart`)
      return this.http.get<Product[]>(`${this.apiUrl}/cart`);
    }
   
    //by saras
    public  deleteProducts(): Observable<any []> {
        const i= 0;
        let url=""
        this.http.get<any[]>(`${this.apiUrl}/cart`).forEach(
        (data) => {

          const p=data;
  p.forEach((product)=>{
    url = `${this.apiUrl}/cart/${product.id}`
        this.http.delete<any []>(url).subscribe()
        console.log("crossed delete")
  })
      
      }
       ) 
       return of<any>(i);
       }
       
  

public getProductsLength():Observable<number>
    {
      return this.getProducts().pipe(map((items)=>items.length))
    }

 public deleteProduct(id:string):Observable<any>
    {
       return this.http.delete<any>(`${this.apiUrl}/cart/${id}`);
    }



    
}