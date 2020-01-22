import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceDesignComponent } from './invoice-design.component';



@NgModule({
  declarations: [InvoiceDesignComponent],
  imports: [
    CommonModule
  ],
  exports:[InvoiceDesignComponent]
})
export class InvoiceDesignModule { }
