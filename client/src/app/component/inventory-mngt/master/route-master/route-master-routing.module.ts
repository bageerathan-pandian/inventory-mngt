import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteMasterComponent } from './route-master.component';


const routes: Routes = [
  {path:'',component:RouteMasterComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteMasterRoutingModule { }
