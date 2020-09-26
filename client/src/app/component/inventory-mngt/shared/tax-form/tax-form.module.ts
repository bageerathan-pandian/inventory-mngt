import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxFormComponent } from './tax-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { KeyFilterModule } from 'primeng/keyfilter';



@NgModule({
  declarations: [TaxFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    KeyFilterModule
  ],
  exports: [TaxFormComponent]
})
export class TaxFormModule { }
