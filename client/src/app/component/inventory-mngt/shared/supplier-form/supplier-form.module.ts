import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierFormComponent } from './supplier-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputMaskModule } from 'primeng/inputmask';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';



@NgModule({
  declarations: [SupplierFormComponent],
  imports: [
    CommonModule,    
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    InputMaskModule,
    GooglePlaceModule
  ],
  exports:[SupplierFormComponent]
})
export class SupplierFormModule { }
