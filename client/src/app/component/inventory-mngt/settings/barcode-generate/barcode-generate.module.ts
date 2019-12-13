import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarcodeGenerateRoutingModule } from './barcode-generate-routing.module';
import { BarcodeGenerateComponent } from './barcode-generate.component';
import { NgxBarcodeModule } from 'ngx-barcode';

@NgModule({
  declarations: [BarcodeGenerateComponent],
  imports: [
    CommonModule,
    BarcodeGenerateRoutingModule,
    NgxBarcodeModule
  ]
})
export class BarcodeGenerateModule { }
