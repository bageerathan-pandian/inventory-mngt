import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceDesignComponent } from './invoice-design/invoice-design.component';
import { InvoiceDesignPosComponent } from './invoice-design-pos/invoice-design-pos.component';
import { StockFormComponent } from './stock-form/stock-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [InvoiceDesignComponent, InvoiceDesignPosComponent, StockFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule
  ],
  exports:[InvoiceDesignComponent, InvoiceDesignPosComponent,StockFormComponent]
})
export class SharedModule { }
