import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterComponent } from './master.component';
import { AuthGuard } from 'src/app/guard/auth.guard';


const routes: Routes = [
  {path: '', component: MasterComponent,},
  {path:'company',loadChildren:() => import('./company-master/company-master.module').then(m => m.CompanyMasterModule),canActivate:[AuthGuard]},
  {path:'category',loadChildren:() => import('./category-master/category-master.module').then(m => m.CategoryMasterModule),canActivate:[AuthGuard]},
  {path:'sub-category',loadChildren:() => import('./sub-category-master/sub-category-master.module').then(m => m.SubCategoryMasterModule),canActivate:[AuthGuard]},
  {path:'unit',loadChildren:() => import('./unit-master/unit-master.module').then(m => m.UnitMasterModule),canActivate:[AuthGuard]},
  {path:'stock',loadChildren:() => import('./stock-master/stock-master.module').then(m => m.StockMasterModule),canActivate:[AuthGuard]},
  {path:'user',loadChildren:() => import('./user-master/user-master.module').then(m => m.UserMasterModule),canActivate:[AuthGuard]},
  {path:'customer',loadChildren:() => import('./customer-master/customer-master.module').then(m => m.CustomerMasterModule),canActivate:[AuthGuard]},
  {path:'supplier',loadChildren:() => import('./supplier-master/supplier-master.module').then(m => m.SupplierMasterModule),canActivate:[AuthGuard]},
  {path:'tax',loadChildren:() => import('./tax-master/tax-master.module').then(m => m.TaxMasterModule),canActivate:[AuthGuard]},
  {path:'route',loadChildren:() => import('./route-master/route-master.module').then(m => m.RouteMasterModule),canActivate:[AuthGuard]},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
