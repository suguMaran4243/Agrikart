import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {HomeComponent,HeaderComponent,FooterComponent} from '../home/index'
import { HomeRoutingModule } from "./home-routing.module";
import { LoginModule } from "../login/login.module";
import { AboutComponent,ContactComponent} from 'src/app/index'
@NgModule(
    {
        declarations:[HomeComponent,HeaderComponent,FooterComponent,AboutComponent,
            ContactComponent],
        imports:[
           CommonModule,
           HomeRoutingModule,
           LoginModule,
           
        ],
        exports:[HomeComponent,HeaderComponent,FooterComponent]
    })
export class HomeModule
{

}