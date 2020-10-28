import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteMasterRoutingModule } from './route-master-routing.module';
import { RouteMasterComponent } from './route-master.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import {MultiSelectModule} from 'primeng/multiselect';
import { RouteFormModule } from '../../shared/route-form/route-form.module';


@NgModule({
  declarations: [RouteMasterComponent],
  imports: [
    CommonModule,
    RouteMasterRoutingModule,
    HttpClientModule,
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
    ProgressSpinnerModule,
    ReactiveFormsModule,
    MultiSelectModule,
    RouteFormModule
  ]
})
export class RouteMasterModule { }
