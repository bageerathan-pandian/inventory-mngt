import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleCalenderRoutingModule } from './schedule-calender-routing.module';
import { ScheduleCalenderComponent } from './schedule-calender.component';
import {CardModule} from 'primeng/card';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ScheduleCalenderComponent],
  imports: [
    CommonModule,
    ScheduleCalenderRoutingModule,
    CardModule,
    FullCalendarModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ]
})
export class ScheduleCalenderModule { }
