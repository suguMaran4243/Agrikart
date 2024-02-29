import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {HomeComponent,HeaderComponent,FooterComponent} from '../home/index'
// import { HomeComponent } from "./home.component";
// import { HeaderComponent } from "./header/header.component";
// import { FooterComponent } from "./footer/footer.component";


@NgModule(
    {
        declarations:[HomeComponent,HeaderComponent,FooterComponent],
        imports:[
           
        ]
    })
export class HomeModule
{

}