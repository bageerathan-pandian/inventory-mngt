import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {ChartModule} from 'primeng/chart';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import {TooltipModule} from 'primeng/tooltip';
import {DropdownModule} from 'primeng/dropdown';
import {TabViewModule} from 'primeng/tabview';
import {ScrollPanelModule} from 'primeng/scrollpanel';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartModule,
    BreadcrumbModule,
    CardModule,
    ToastModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    TooltipModule,
    DropdownModule,
    TabViewModule,
    ScrollPanelModule
  ]
})
export class DashboardModule { }
