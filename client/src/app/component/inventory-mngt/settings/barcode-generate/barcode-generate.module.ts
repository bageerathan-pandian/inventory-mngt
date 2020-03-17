import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarcodeGenerateRoutingModule } from './barcode-generate-routing.module';
import { BarcodeGenerateComponent } from './barcode-generate.component';
import { NgxBarcodeModule } from 'ngx-barcode';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {TableModule} from 'primeng/table';

import { CardModule } from 'primeng/card';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [BarcodeGenerateComponent],
  imports: [
    CommonModule,
    BarcodeGenerateRoutingModule,
    NgxBarcodeModule,
    ProgressSpinnerModule,
    TableModule,
    CardModule,
    BreadcrumbModule,
    InputTextModule
  ]
})
export class BarcodeGenerateModule { }
