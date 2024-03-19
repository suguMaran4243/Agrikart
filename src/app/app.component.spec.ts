import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FooterComponent, HeaderComponent } from './home';
import { AuthenticationService } from './login/Shared/Services/authentication.service';
import { ProductService } from './Shared/Services/agriculture-products.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TranslationService } from './Shared/Services/translate.service';
import { TranslateService } from '@ngx-translate/core';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent,HeaderComponent,FooterComponent],
      providers:[AuthenticationService,ProductService,HttpClient,HttpHandler,TranslationService,TranslateService],
      imports:[
        AppRoutingModule
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  

  

 
});
