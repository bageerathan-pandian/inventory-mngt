import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseReturnReportComponent } from './purchase-return-report.component';
import { PurchaseReturnReportRoutingModule } from './purchase-return-report-routing.module';



@NgModule({
  declarations: [PurchaseReturnReportComponent],
  imports: [
    CommonModule,
    PurchaseReturnReportRoutingModule
  ]
})
export class PurchaseReturnReportModule { }
