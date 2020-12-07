import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandMasterComponent } from './brand-master.component';


const routes: Routes = [
  {path:'',component:BrandMasterComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandMasterRoutingModule { }
