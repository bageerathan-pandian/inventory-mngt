import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockMasterComponent } from './stock-master.component';

const routes: Routes = [
  {path:'',component:StockMasterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockMasterRoutingModule { }
