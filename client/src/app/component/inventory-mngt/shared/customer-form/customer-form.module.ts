import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from './customer-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputMaskModule } from 'primeng/inputmask';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { CheckboxModule } from 'primeng/checkbox';



@NgModule({
  declarations: [CustomerFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    InputMaskModule,
    CheckboxModule,
    GooglePlaceModule
  ],
  exports: [CustomerFormComponent]
})
export class CustomerFormModule { }
