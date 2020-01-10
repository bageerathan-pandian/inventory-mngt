import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceDesignComponent } from './invoice-design/invoice-design.component';
import { InvoiceDesignPosComponent } from './invoice-design-pos/invoice-design-pos.component';
import { StockFormComponent } from './stock-form/stock-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CategoryFormComponent } from './category-form/category-form.component';
import { UnitFormComponent } from './unit-form/unit-form.component';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [InvoiceDesignComponent, InvoiceDesignPosComponent, StockFormComponent, CategoryFormComponent, UnitFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    InputTextareaModule,
    DialogModule
  ],
  exports:[InvoiceDesignComponent, InvoiceDesignPosComponent,StockFormComponent, CategoryFormComponent, UnitFormComponent]
})
export class SharedModule { }
