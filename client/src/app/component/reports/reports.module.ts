import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { PurchaseReportComponent } from './purchase-report/purchase-report.component';

@NgModule({
  declarations: [ReportsComponent, SalesReportComponent, PurchaseReportComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
