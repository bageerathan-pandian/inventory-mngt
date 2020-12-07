import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandFormComponent } from './brand-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [BrandFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
  ],
  exports:[BrandFormComponent]
})
export class BrandFormModule { }
