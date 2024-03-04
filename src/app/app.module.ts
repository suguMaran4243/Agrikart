import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {LoginComponent } from '../app/index';
import { LoginModule } from './login/login.module';
import { ProductService } from './Shared/Services/agriculture-products.service';
import { ProductModule } from './product/product.module';
import { CartDataService } from './Shared/Services/cartdata.service';

import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoginModule,
    ProductModule,
    HomeModule,
  ],
  providers: [ProductService, CartDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
