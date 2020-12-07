import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseReturnReportComponent } from './purchase-return-report.component';
import { PurchaseReturnReportRoutingModule } from './purchase-return-report-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PurchaseReturnReportComponent],
  imports: [
    CommonModule,
    PurchaseReturnReportRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PurchaseReturnReportModule { }
