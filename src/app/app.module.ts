import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { ProductService } from './Shared/Services/agriculture-products.service';
import { ProductModule } from './product/product.module';
import { CartDataService } from './Shared/Services/cartdata.service';

import { HomeModule } from './home/home.module';




@NgModule({
  declarations: [
    AppComponent,
   
    
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    ProductModule,
    HomeModule,
  ],
  providers: [ProductService, CartDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
