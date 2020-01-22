import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockFormComponent } from './stock-form.component';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputMaskModule } from 'primeng/inputmask';



@NgModule({
  declarations: [StockFormComponent],
  imports: [
    CommonModule,    
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    InputTextareaModule,
    DialogModule,
    InputMaskModule,
    // GooglePlaceModule
  ],
  exports:[StockFormComponent]
})
export class StockFormModule { }
