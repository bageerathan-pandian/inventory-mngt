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
import { RouteFormModule } from '../route-form/route-form.module';



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
    GooglePlaceModule,
    RouteFormModule
  ],
  exports: [CustomerFormComponent]
})
export class CustomerFormModule { }
