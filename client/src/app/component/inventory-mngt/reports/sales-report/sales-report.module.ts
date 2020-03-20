import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesReportComponent } from './sales-report.component';
import { SalesReportRoutingModule } from './sales-report-routing.module';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [SalesReportComponent],
  imports: [
    CommonModule,
    SalesReportRoutingModule,
    BreadcrumbModule,
    TableModule,
    CardModule,
    ConfirmDialogModule,
    InputTextModule,
    ButtonModule
  ]
})
export class SalesReportModule { }
