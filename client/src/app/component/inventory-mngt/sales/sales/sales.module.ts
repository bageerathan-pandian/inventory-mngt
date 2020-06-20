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
import { StockFormModule } from '../../shared/stock-form/stock-form.module';
import { CategoryFormModule } from '../../shared/category-form/category-form.module';
import { UnitFormModule } from '../../shared/unit-form/unit-form.module';
import { CustomerFormModule } from '../../shared/customer-form/customer-form.module';
import { InvoiceDesignModule } from '../../shared/invoice-design/invoice-design.module';
import { InvoiceDesignPosModule } from '../../shared/invoice-design-pos/invoice-design-pos.module';
import {ScrollPanelModule} from 'primeng/scrollpanel';


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
    StockFormModule,
    CategoryFormModule,
    UnitFormModule,
    CustomerFormModule,
    InvoiceDesignModule,
    InvoiceDesignPosModule,
    ScrollPanelModule
  ]
})
export class SalesModule { }
