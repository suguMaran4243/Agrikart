import { TestBed } from '@angular/core/testing';
import { CartServiceService } from './cart-service.service';
import { Product } from '../Model/product.model';

describe('CartService', () => {
  let service: CartServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return message', () => {
    const message = service.getCartItems();
    expect(message).toBeDefined();
  });

  it('should check storage', () => {
    const storage = service.clearProducts();
    expect(storage).toBeDefined;
  });
  it('should add product to cart if the cart doesnt have the product',()=>
  {
    const product:Product={id:101,product_name:'Paddy',product_image:'dummy.jpg',product_prize:300,quantity:3,product_category:'agri'};
    service.addToCart(product)
    expect(service.cartItems).toContain(product)
  
  })
  it('should add not product to cart if the cart already have the product instead increase quantity',()=>
  {
    const product:Product={id:101,product_name:'Paddy',product_image:'dummy.jpg',product_prize:300,quantity:1,product_category:'agri'};
    service.cartItems=[product]
    service.addToCart(product)
    expect(service.cartItems[0].quantity).toBe(2)
  })
  

});
