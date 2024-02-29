import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';

const routes: Routes = [
  
   {path:'',component:ProductComponent},

    {path:'Agri/:id',loadChildren: () => import('./agri/agri.module').then(m => m.AgriModule) },
  
]
  
   
   

    

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
