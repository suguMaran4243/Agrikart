import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Product } from 'src/app/Shared/Model/product.model';

@Injectable()
export class CartDataService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  public cart: Product[] = [];

  cartItems: Observable<any>;

  /*

  addtoCart it will post the data and update the cart

  @params - product :Product particular product from the agri component 

  @return - http.post of the product
  */
  public addTocart(product: Product): Observable<Product> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');
    return this.http.post<Product>(`${this.apiUrl}/cart`, product, { headers });
  }

/**
 * Retrieves the list of products in the user's shopping cart from the server.
 *
 * 
 * @returns An Observable that emits an array of 'Product' objects representing the products in the user's cart.
 */

  public getProducts(): Observable<Product[]> {
    this.cartItems = this.http.get<any[]>(`${this.apiUrl}/cart`);
    return this.http.get<Product[]>(`${this.apiUrl}/cart`);
  }

  /**
   *  Deletes all products in the user's shopping cart from the server.
   * 
   * @returns An Observable that emits a response indicating the success of the delete operation. The response type is expected to be an array of any data.
   */
  public deleteProducts(): Observable<any[]> {
    const i = 0;
    let url = '';
    this.http.get<any[]>(`${this.apiUrl}/cart`).forEach((data) => {
      const p = data;
      p.forEach((product) => {
        url = `${this.apiUrl}/cart/${product.id}`;
        this.http.delete<any[]>(url).subscribe();
        console.log('crossed delete');
      });
    });
    return of<any>(i);
  }

  public getProductsLength(): Observable<number> {
    return this.getProducts().pipe(map((items) => items.length));
  }

/**
 * Deletes a product from the user's shopping cart based on the provided ID.
 *
 * 
 * @param The ID of the product to be deleted from the cart.
 * @returns An Observable that emits a response indicating the success of the delete operation.
 * The response type is expected to be an object of any data.
 * 
 **/

  public deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/cart/${id}`);
  }
}
