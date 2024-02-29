import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import{HomeComponent,AboutComponent,ProductComponent,ContactComponent,LoginComponent} from '../app/index'
import { HeaderComponent,FooterComponent } from '../app/home/index' 

import { LoginModule } from './login/login.module';
import { SignupModule } from './login/signup/signup.module';


import { DataService } from './Shared/Services/dataservice.service';
import { AuthenticationService } from './Shared/Services/authentication.service';
import { LoginDataService } from './Shared/Services/login-data.service';
import { ProductService } from './Shared/Services/agriculture-products.service';
import { ProductModule } from './product/product.module';
import { ProductRoutingModule } from './product/product-routing.module';
import { CartDataService } from './Shared/Services/cartdata.service';






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
   
    

  ],
  providers: [LoginDataService,AuthenticationService,ProductService,CartDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
