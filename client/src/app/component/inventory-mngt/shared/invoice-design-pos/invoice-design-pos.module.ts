import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceDesignPosComponent } from './invoice-design-pos.component';



@NgModule({
  declarations: [InvoiceDesignPosComponent],
  imports: [
    CommonModule,
  ],
  exports:[InvoiceDesignPosComponent]
})
export class InvoiceDesignPosModule { }
