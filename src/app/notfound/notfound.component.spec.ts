import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NotfoundComponent } from './notfound.component';
import { Router } from '@angular/router';



describe('AboutComponent', () => {
  let component: NotfoundComponent;
  let fixture: ComponentFixture<NotfoundComponent>;
  let router:Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotfoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotfoundComponent);
    component = fixture.componentInstance;
    router=TestBed.inject(Router);
    spyOn(router,'navigate').and.stub();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have notfound container',()=>
  {
    fixture.detectChanges();
    const notfound=fixture.nativeElement.querySelector('notfound')
    expect(notfound).toBeDefined()
  })
  it('should navigate to Home',fakeAsync(()=>
  {
   component.navigateToHome();
   tick();
   expect(router.navigate).toHaveBeenCalledWith(['home'])
  }))
  
});
