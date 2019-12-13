import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryMasterRoutingModule } from './category-master-routing.module';
import { CategoryMasterComponent } from './category-master.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import {InputSwitchModule} from 'primeng/inputswitch';
import {DropdownModule} from 'primeng/dropdown';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TooltipModule } from 'primeng/tooltip';


@NgModule({
  declarations: [CategoryMasterComponent],
  imports: [
    CommonModule,
    CategoryMasterRoutingModule,
    BreadcrumbModule,
    ToastModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    CardModule,
    InputSwitchModule,
    DropdownModule,
    ConfirmDialogModule,
    DialogModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    TooltipModule
  ]
})
export class CategoryMasterModule { }
