import { ComponentFixture, TestBed} from "@angular/core/testing";
import { SignupComponent } from "./signup.component"
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

describe('SignupComponent',()=>
{
    let component:SignupComponent;
    let fixture:ComponentFixture<SignupComponent>;

    beforeEach(async ()=>
    {
        await TestBed.configureTestingModule({
            declarations:[SignupComponent],
            imports:[HttpClientModule,ReactiveFormsModule],
        }).compileComponents();

        fixture=TestBed.createComponent(SignupComponent);
        component=fixture.componentInstance;
        fixture.detectChanges();
    })
    it('should create component',()=>
    {
        expect(component).toBeTruthy()
    })
})