import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { HttpClientModule } from '@angular/common/http';

describe('HeaderComponent', () => {
  let componnet: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    componnet = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(componnet).toBeTruthy();
  });
  it('should have navigation bar', () => {
    fixture.detectChanges();
    const navbar = fixture.nativeElement.querySelector('nav');
    expect(navbar).toBeDefined();
  });
  it('should have logo image', () => {
    fixture.detectChanges();
    const logo = fixture.nativeElement.querySelector('img');
    expect(logo).toBeTruthy();
  });
  it('should have login button', () => {
    fixture.detectChanges();
    const button: HTMLElement = fixture.nativeElement.querySelector('#loginButton');
    expect(button.textContent).toContain('Login');
  });
  it('should have application name as AgriKart', (): void => {
    fixture.detectChanges();
    const appTitle: HTMLElement= fixture.nativeElement.querySelector('.appName');
    expect(appTitle.textContent).toEqual('AgriKart');
  });
});
