import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule  } from '@angular/common/http';
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports:[HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have table',()=>
  {
    fixture.detectChanges;
    const tableElement=fixture.nativeElement.querySelector('table');
    expect(tableElement).toBeTruthy();
  });

  it('should have button to buy all product',()=>
  {
    fixture.detectChanges();
    const buyall=fixture.nativeElement.querySelector('buyall');
    expect(buyall).toBeTruthy();
    expect(buyall.textContent.trim()).toBe('Buy all')
  })
});
