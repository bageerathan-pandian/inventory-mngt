import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitFormComponent } from './unit-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [UnitFormComponent],
  imports: [
    CommonModule,    
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    // GooglePlaceModule
  ],
  exports:[UnitFormComponent]
})
export class UnitFormModule { }
