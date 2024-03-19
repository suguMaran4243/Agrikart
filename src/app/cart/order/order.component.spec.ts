import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { OrderComponent } from './order.component';
import { CartServiceService } from 'src/app/Shared/Services/cart-service.service';
import { of } from 'rxjs';
import { Product } from 'src/app/Shared/Model/product.model';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;
  let mockCartService: Partial<CartServiceService>;
  let router:Router;
  let service:CartServiceService;
  beforeEach(async () => {
    

    await TestBed.configureTestingModule({
      declarations: [OrderComponent],
      imports: [RouterTestingModule],
      providers:[CartServiceService,
      {
        provide:ActivatedRoute,
        useValue: {
          snapshot: {
            paramMap: {
              get: () => '101' // Provide a mock value for paramMap.get('id')
            }
          }
        }
      }
    ]
      
      
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    router=TestBed.inject(Router);
    spyOn(router,'navigate').and.stub();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have navigate to payment',fakeAsync(()=>
  {
    component.navigatetoPayment();
    tick();
    expect(router.navigate).toHaveBeenCalledWith(['Payment'])
  }))
  
 

});
