import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteFormComponent } from './route-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [RouteFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    // GooglePlaceModule
  ],
  exports:[RouteFormComponent]
})
export class RouteFormModule { }
