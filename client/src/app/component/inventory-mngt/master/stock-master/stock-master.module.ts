import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockMasterRoutingModule } from './stock-master-routing.module';
import { StockMasterComponent } from './stock-master.component';
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
import {InputTextareaModule} from 'primeng/inputtextarea';
import {KeyFilterModule} from 'primeng/keyfilter';
import {InputSwitchModule} from 'primeng/inputswitch';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {TooltipModule} from 'primeng/tooltip';
import { StockFormModule } from '../../shared/stock-form/stock-form.module';
import { CategoryFormModule } from '../../shared/category-form/category-form.module';
import { UnitFormModule } from '../../shared/unit-form/unit-form.module';
import { TaxFormModule } from '../../shared/tax-form/tax-form.module';
import { BrandFormModule } from '../../shared/brand-form/brand-form.module';

@NgModule({
  declarations: [StockMasterComponent],
  imports: [
    CommonModule,
    StockMasterRoutingModule,
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
    InputTextareaModule,
    KeyFilterModule,
    InputSwitchModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    TooltipModule,
    StockFormModule,
    CategoryFormModule,
    UnitFormModule,
    TaxFormModule,
    BrandFormModule
  ]
})
export class StockMasterModule { }
