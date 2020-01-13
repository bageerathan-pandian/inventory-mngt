import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseReportComponent } from './purchase-report.component';
import { PurchaseReportRoutingModule } from './purchase-report-routing.module';



@NgModule({
  declarations: [PurchaseReportComponent],
  imports: [
    CommonModule,
    PurchaseReportRoutingModule
  ]
})
export class PurchaseReportModule { }
