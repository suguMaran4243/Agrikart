import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgriComponent } from './agri.component';
import { LoginGuardService } from 'src/app/Shared/Services/login-guard.service';

const routes: Routes = [{ path: '', component: AgriComponent ,canActivate:[LoginGuardService]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgriRoutingModule { }
