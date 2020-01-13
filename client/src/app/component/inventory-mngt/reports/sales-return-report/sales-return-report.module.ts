import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesReturnReportRoutingModule } from './sales-return-report-routing.module';
import { SalesReturnReportComponent } from './sales-return-report.component';


@NgModule({
  declarations: [SalesReturnReportComponent],
  imports: [
    CommonModule,
    SalesReturnReportRoutingModule
  ]
})
export class SalesReturnReportModule { }
