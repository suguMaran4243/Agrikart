import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router} from '@angular/router';
import { OrderComponent } from './order.component';
import { CartServiceService } from 'src/app/Shared/Services/cart-service.service';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;
  let router: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderComponent],
      imports: [RouterTestingModule],
      providers: [
        CartServiceService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '101',
              },
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    spyOn(router, 'navigate').and.stub();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have navigate to payment', fakeAsync(() => {
    component.navigatetoPayment();
    tick();
    expect(router.navigate).toHaveBeenCalledWith(['payment']);
  }));
  it('should call ngOnint',()=>
  {
      spyOn(component,'ngOnInit');
      component.ngOnInit();
      expect(component.ngOnInit).toHaveBeenCalled()
  })
});
