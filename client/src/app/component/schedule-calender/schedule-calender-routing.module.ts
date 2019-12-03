import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleCalenderComponent } from './schedule-calender.component';

const routes: Routes = [
  {path:'',component:ScheduleCalenderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleCalenderRoutingModule { }
