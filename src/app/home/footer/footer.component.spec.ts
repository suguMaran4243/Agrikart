import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { HttpClientModule } from '@angular/common/http';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [HttpClientModule],
    }).compileComponents();
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have footer', () => {
    fixture.detectChanges();
    const footer = fixture.nativeElement.querySelector('.footer');
    expect(footer).toBeDefined();
  });
  it('should be footer text', () => {
    fixture.detectChanges();
   
    const footerText: HTMLElement= fixture.nativeElement.querySelector('p');
    expect(footerText).toBeTruthy();
    expect(footerText.textContent).toContain(
      '©2024 AgriKart.All rights reserved'
    );
  });
});
