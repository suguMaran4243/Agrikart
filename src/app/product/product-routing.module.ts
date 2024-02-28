import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';

const routes: Routes = [
  
   {path:'',component:ProductComponent},
    {path:'agri',loadChildren: () => import('./agri/agri.module').then(m => m.AgriModule) },
  
   { path: 'fertilizer', loadChildren: () => import('./fertilizer/fertilizer.module').then(m => m.FertilizerModule) }]
  
   
   

    

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
