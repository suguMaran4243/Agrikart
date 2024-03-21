import { ComponentFixture, TestBed, fakeAsync, tick } from "@angular/core/testing";
import { LayoutComponent } from "./layout.component"
import { HttpClientModule } from "@angular/common/http";
import { CartServiceService } from "../../Services/cart-service.service";
import { ProductService } from "../../Services/agriculture-products.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../../Model/product.model";

describe('LayoutComponent',()=>
{
    let component:LayoutComponent;
    let fixture:ComponentFixture<LayoutComponent>;
    let router:Router;
    let cartService:CartServiceService;

    beforeEach(async ()=>
    {
        await TestBed.configureTestingModule({
            declarations:[LayoutComponent],
            imports:[HttpClientModule],
            providers:[CartServiceService,ProductService,
                {
                    
                        provide: ActivatedRoute,
                        useValue: {
                          snapshot: {
                            paramMap: {
                              get: () => '101', // Provide a mock value for paramMap.get('id')
                            },
                          },
                        },
                      },
                ]
        }).compileComponents();
        fixture=TestBed.createComponent(LayoutComponent);
        component=fixture.componentInstance;
        router=TestBed.inject(Router);
        spyOn(router,'navigate').and.stub();
        cartService=TestBed.inject(CartServiceService)
       
        fixture.detectChanges();
    })
    it('shold create component',()=>
    {
        expect(component).toBeTruthy();
    })
    it('should have onsearch method',()=>
    {
        expect(component.onSearch).toHaveBeenCalled;
    })
    it('should have addtocart button',()=>
    {
        fixture.detectChanges();
      const addtoCart=fixture.nativeElement.querySelector('#add');
        expect(addtoCart).toBeDefined


    })
    it('should have navigate to buy',fakeAsync(()=>
    {
        component.navigatetoBuynow(101);
        tick();
        expect(router.navigate).toHaveBeenCalledWith(['/buy',101]);

    }))
    it('should call ngOnint',()=>
    {
        spyOn(component,'ngOnInit');
        component.ngOnInit();
        expect(component.ngOnInit).toHaveBeenCalled()
    })
    it('should have addtoCart method to push product to cart',()=>
    {
        const product:Product={id:101,product_name:'Paddy',product_image:'dummy.jpg',product_prize:300,quantity:2,product_category:'agri'};
        component.addToCart(product);
       

    })
    
})