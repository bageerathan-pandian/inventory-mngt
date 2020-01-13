import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseReturnComponent } from './purchase-return.component';


const routes: Routes = [
  {path:'',component:PurchaseReturnComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseReturnRoutingModule { }
