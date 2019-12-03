import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { PurchaseReportComponent } from './purchase-report/purchase-report.component';

const routes: Routes = [
  {path:'',redirectTo:'sales-report',pathMatch:'full'},
  {path:'sales-report',component:SalesReportComponent},
  {path:'purchase-report',component:PurchaseReportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
