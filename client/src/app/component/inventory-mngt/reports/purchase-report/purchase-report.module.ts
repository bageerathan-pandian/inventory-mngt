import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseReportComponent } from './purchase-report.component';
import { PurchaseReportRoutingModule } from './purchase-report-routing.module';
import { FormsModule } from '@angular/forms';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';



@NgModule({
  declarations: [PurchaseReportComponent],
  imports: [
    CommonModule,
    PurchaseReportRoutingModule,
    FormsModule,
    BreadcrumbModule,
    TableModule,
    CardModule,
    ConfirmDialogModule,
    InputTextModule,
    ButtonModule,
    NgxDaterangepickerMd.forRoot()
  ]
})
export class PurchaseReportModule { }
