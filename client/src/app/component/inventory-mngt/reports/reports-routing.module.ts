import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsComponent } from './reports.component';
import { AuthGuard } from 'src/app/guard/auth.guard';

const routes: Routes = [
{path: '', component: ReportsComponent,},
{path:'sales-report',loadChildren:() => import('./sales-report/sales-report.module').then(m => m.SalesReportModule),canActivate:[AuthGuard]},
{path:'sales-return-report',loadChildren:() => import('./sales-return-report/sales-return-report.module').then(m => m.SalesReturnReportModule),canActivate:[AuthGuard]},
{path:'purchase-report',loadChildren:() => import('./purchase-report/purchase-report.module').then(m => m.PurchaseReportModule),canActivate:[AuthGuard]},
{path:'purchase-return-report',loadChildren:() => import('./purchase-return-report/purchase-return-report.module').then(m => m.PurchaseReturnReportModule),canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
