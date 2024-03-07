import { TestBed } from '@angular/core/testing';

import { CartServiceService } from './cart-service.service';

describe('CartService', () => {
  let service: CartServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return message',()=>
  {
    const message=service.getCartItems();
    expect(message).toBeDefined();
  });

  it('should check storage',()=>
  {
    const storage=service.clearProducts()
    expect(storage).toBeDefined;
  })
});