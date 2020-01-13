import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesComponent } from './sales.component';
import { SalesRoutingModule } from './sales-routing.module';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {DropdownModule} from 'primeng/dropdown';
import {KeyFilterModule} from 'primeng/keyfilter';
import {InputMaskModule} from 'primeng/inputmask';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {SpinnerModule} from 'primeng/spinner';
import {SplitButtonModule} from 'primeng/splitbutton';
import {InplaceModule} from 'primeng/inplace';
import { DialogModule } from 'primeng/dialog';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import {SidebarModule} from 'primeng/sidebar';
import { SafePipeModule } from 'safe-pipe';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [SalesComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    ToastModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    CardModule,
    AutoCompleteModule,
    CalendarModule,
    CheckboxModule,
    DropdownModule,
    KeyFilterModule,
    InputMaskModule,
    ConfirmDialogModule,
    SpinnerModule,
    SplitButtonModule,
    InplaceModule,
    DialogModule,
    GooglePlaceModule,
    SidebarModule,
    SafePipeModule,
    SharedModule
  ]
})
export class SalesModule { }
