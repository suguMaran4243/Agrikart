import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { By } from '@angular/platform-browser';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title',()=>
  {
    const fixture=TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const compiled=fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Welcome to our application');
  })
  it('should renser paragraph',()=>
  
  {
    const fixture=TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const compile=fixture.nativeElement as HTMLElement;
    expect(compile.querySelector('p')?.textContent).toContain('Hello Sugumaran')
  })
  it('should check if button',()=>
  {
    const buttonELement=fixture.debugElement.query(By.css('button'));
    expect(buttonELement).toBeTruthy();
  })
});
