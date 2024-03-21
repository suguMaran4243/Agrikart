import { ComponentFixture, TestBed, fakeAsync, tick } from "@angular/core/testing";
import { BuynowComponent } from "./buynow.component"
import { HttpClientModule } from "@angular/common/http";
import { BuynowRoutingModule } from "./buynow-routing.module";
import { ProductService } from "src/app/Shared/Services/agriculture-products.service";
import { ActivatedRoute, Router } from "@angular/router";

describe('BuyNowComponent',()=>
{
    let component:BuynowComponent;
    let fixture:ComponentFixture<BuynowComponent>;
    let router:Router;
beforeEach(async ()=>
{
    await TestBed.configureTestingModule({
        declarations:[BuynowComponent],
        imports:[HttpClientModule,BuynowRoutingModule],
        providers:[ProductService,
        {
            provide:ActivatedRoute,
            useValue:{
                snapshot:
                {
                    paramMap:{
                        get:()=>'101'
                    }
                }

            }
        }]

    }).compileComponents();
    fixture=TestBed.createComponent(BuynowComponent);
    component=fixture.componentInstance;
    router=TestBed.inject(Router);
    spyOn(router,'navigate').and.stub();
    fixture.detectChanges();
})
it('should create component',()=>
{
    expect(component).toBeTruthy();
})
it('should have buy container',()=>
{
    fixture.detectChanges();
    const containerElement:HTMLElement=fixture.nativeElement.querySelector('buy-container');
    expect(containerElement).toBeDefined();
})
it('should have navigate to payment', fakeAsync(() => {
    component.navigateToPayment();
    tick();
    expect(router.navigate).toHaveBeenCalledWith(['payment']);
  }));
 it('should have function as increment',()=>
 {
   
    expect(component.increment).toHaveBeenCalled;
 })
 it('should have function as decrement',()=>
 {
   
    expect(component.decrement).toHaveBeenCalled;
 })
})