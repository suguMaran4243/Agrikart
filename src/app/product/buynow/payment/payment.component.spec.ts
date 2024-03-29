import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PaymentComponent } from "./payment.component"
import { HttpClientModule } from "@angular/common/http";

describe('PaymentComponent',()=>
{
    let component:PaymentComponent;
    let fixture:ComponentFixture<PaymentComponent>;
    beforeEach(async()=>
    {
        await TestBed.configureTestingModule({
            declarations:[PaymentComponent],
            imports:[HttpClientModule],
        }).compileComponents();
        fixture=TestBed.createComponent(PaymentComponent);
        component=fixture.componentInstance;
        fixture.detectChanges();
    })
    it('should create component',()=>
    {
        expect(component).toBeTruthy();
    })
    it('should have image',()=>
    {
        fixture.detectChanges();
        const imageELement:HTMLElement=fixture.nativeElement.querySelector('img');
        expect(imageELement).toBeDefined();
    })
    it('should have orderID',()=>
    {
        expect(component.orderid).toBeTrue
    })
})