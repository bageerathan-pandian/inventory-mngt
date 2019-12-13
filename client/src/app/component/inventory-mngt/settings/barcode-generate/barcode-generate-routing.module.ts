import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarcodeGenerateComponent } from './barcode-generate.component';


const routes: Routes = [
  {path:'',component:BarcodeGenerateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarcodeGenerateRoutingModule { }
