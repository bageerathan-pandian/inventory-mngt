import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionComponent } from './collection.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { PasswordModule } from 'primeng/password';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { InputSwitchModule } from 'primeng/inputswitch';
import { KeyFilterModule } from 'primeng/keyfilter';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';
import { TabViewModule } from 'primeng/tabview';
import { SpinnerModule } from 'primeng/spinner';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [CollectionComponent],
  imports: [
    CommonModule,
    CollectionRoutingModule,
    ReactiveFormsModule,
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
    InputTextareaModule,
    KeyFilterModule,
    InputSwitchModule,
    SidebarModule,
    TooltipModule,
    TabViewModule,
    SpinnerModule,
    CalendarModule
  ]
})
export class CollectionModule { }
