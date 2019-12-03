import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubCategoryMasterComponent } from './sub-category-master.component';


const routes: Routes = [
  {path:'',component:SubCategoryMasterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubCategoryMasterRoutingModule { }
