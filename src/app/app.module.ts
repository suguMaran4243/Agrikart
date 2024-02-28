import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent, } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';



import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { SignupModule } from './login/signup/signup.module';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';

import { DataService } from './Shared/Services/dataservice.service';
import { AuthenticationService } from './Shared/Services/authentication.service';
import { LoginDataService } from './Shared/Services/login-data.service';
import { ProductService } from './Shared/Services/agriculture-products.service';
import { ProductModule } from './product/product.module';
import { ProductRoutingModule } from './product/product-routing.module';
// import { LayoutModule } from './Shared/components/layout/layout.module';
// import { ProductTabService } from './Shared/Services/product-tab.service';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
   
    ContactComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    
    
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginModule,
    SignupModule,
    ProductModule,
    ProductRoutingModule,
    // LayoutModule
    

  ],
  providers: [LoginDataService,AuthenticationService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
