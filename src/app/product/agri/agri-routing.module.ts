import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgriComponent } from './agri.component';


const routes: Routes = [{ path: '', component: AgriComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgriRoutingModule { }
