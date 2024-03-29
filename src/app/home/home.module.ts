import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent, HeaderComponent, FooterComponent } from '../home/index';
import { HomeRoutingModule } from './home-routing.module';
import { LoginModule } from '../login/login.module';
import { AboutComponent, ContactComponent } from 'src/app/index';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../login/Shared/Guard/auth.guard';
import { SignupModule } from '../login/signup/signup.module';
import { CanDeactivateServices } from '../contact/Shared/Services/canDeactivate.services';
import { CartModule } from '../cart/cart.module';
import { NotfoundComponent } from '../notfound/notfound.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    NotfoundComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LoginModule,
    FormsModule,
    SignupModule,
    CartModule,
    TranslateModule,
  ],
  exports: [HomeComponent, HeaderComponent, FooterComponent, LoginModule],
  providers: [AuthGuard, CanDeactivateServices,TranslateService],
})
export class HomeModule {}
