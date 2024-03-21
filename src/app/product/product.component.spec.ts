import { ComponentFixture, TestBed, fakeAsync, tick } from "@angular/core/testing";
import { ProductComponent } from "./product.component"
import { HttpClientModule } from "@angular/common/http";
import { ProductRoutingModule } from "./product-routing.module";
import { Router } from "@angular/router";

describe('ProductComponent',()=>
{
    let component:ProductComponent;
    let fixture:ComponentFixture<ProductComponent>;
    let router:Router;
    beforeEach(async ()=>
    {
        await TestBed.configureTestingModule({
            declarations:[ProductComponent],
            imports:[HttpClientModule,ProductRoutingModule],
        }).compileComponents();

        fixture=TestBed.createComponent(ProductComponent);
        component=fixture.componentInstance;
        router=TestBed.inject(Router);
        spyOn(router,'navigate').and.stub();
        fixture.detectChanges();
    })
    it('should create',()=>
    {
        expect(component).toBeTruthy();
    })
    it('should have button explore',()=>
    {
        fixture.detectChanges();
        const buttonText='Explore'
        const button:HTMLButtonElement=fixture.nativeElement.querySelector('button');
        expect(button.textContent).toEqual(buttonText)
    })
    it('should have navigation method to agri component',fakeAsync(()=>
    {
        component.navigateTo('101');
        tick();
        expect(router.navigate).toHaveBeenCalledWith(['/Agri','101'])
    }))
})