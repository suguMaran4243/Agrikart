import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { HttpClientModule } from '@angular/common/http';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have the form', () => {
    fixture.detectChanges();
    const formElement = fixture.nativeElement.querySelector('form');
    expect(formElement).toBeTruthy();
  });
  it('should have the image', () => {
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('img');
    expect(image).toBeDefined();
  });
});
