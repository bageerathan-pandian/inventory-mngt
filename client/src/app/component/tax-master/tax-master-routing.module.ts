import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaxMasterComponent } from './tax-master.component';

const routes: Routes = [
  {path:'',component:TaxMasterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxMasterRoutingModule { }
