import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductBuyComponent } from './product-buy.component';

const routes: Routes = [
  {path:'',component:ProductBuyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductBuyRoutingModule { }
