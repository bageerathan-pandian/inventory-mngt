import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxMasterRoutingModule } from './tax-master-routing.module';
import { TaxMasterComponent } from './tax-master.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { PasswordModule } from 'primeng/password';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {MultiSelectModule} from 'primeng/multiselect';


@NgModule({
  declarations: [TaxMasterComponent],
  imports: [
    CommonModule,
    TaxMasterRoutingModule,
    HttpClientModule,
    CardModule,
    FormsModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    PasswordModule,
    BreadcrumbModule,
    ConfirmDialogModule,
    ToastModule,
    InputSwitchModule,
    ProgressSpinnerModule,
    ReactiveFormsModule,
    MultiSelectModule
  ]
})
export class TaxMasterModule { }
