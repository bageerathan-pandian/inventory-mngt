import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierMasterComponent } from './supplier-master.component';

const routes: Routes = [
  {path:'',component:SupplierMasterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierMasterRoutingModule { }
