import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesReportComponent } from './sales-report.component';
import { SalesReportRoutingModule } from './sales-report-routing.module';


@NgModule({
  declarations: [SalesReportComponent],
  imports: [
    CommonModule,
    SalesReportRoutingModule
  ]
})
export class SalesReportModule { }
