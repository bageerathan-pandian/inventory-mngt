import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesReportComponent } from './sales-report.component';
import { SalesReportRoutingModule } from './sales-report-routing.module';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SalesReportComponent],
  imports: [
    CommonModule,
    SalesReportRoutingModule,
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
export class SalesReportModule { }
