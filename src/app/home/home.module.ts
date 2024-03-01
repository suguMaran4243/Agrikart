import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {HomeComponent,HeaderComponent,FooterComponent} from '../home/index'
import { HomeRoutingModule } from "./home-routing.module";

@NgModule(
    {
        declarations:[HomeComponent,HeaderComponent,FooterComponent],
        imports:[
           CommonModule,
           HomeRoutingModule
        ],
        exports:[HomeComponent,HeaderComponent,FooterComponent]
    })
export class HomeModule
{

}