import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryFormComponent } from './category-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';



@NgModule({
   declarations: [CategoryFormComponent],
  imports: [
    CommonModule,    
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    // GooglePlaceModule
  ],
  exports:[CategoryFormComponent]
})
export class CategoryFormModule { }
