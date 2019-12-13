import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierMasterRoutingModule } from './supplier-master-routing.module';
import { SupplierMasterComponent } from './supplier-master.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';
import {InputSwitchModule} from 'primeng/inputswitch';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import {InputMaskModule} from 'primeng/inputmask';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@NgModule({
  declarations: [SupplierMasterComponent],
  imports: [
    CommonModule,
    SupplierMasterRoutingModule,
    CardModule,
    FormsModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    BreadcrumbModule,
    ConfirmDialogModule,
    ToastModule,
    InputSwitchModule,
    GooglePlaceModule,
    InputMaskModule,
    ReactiveFormsModule,
    ProgressSpinnerModule
  ]
})
export class SupplierMasterModule { }
