import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  // {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'',loadChildren:() => import('./component/home/home.module').then(m => m.HomeModule)},
  {path:'login',loadChildren:() => import('./component/login/login.module').then(m => m.LoginModule)},
  {path:'home',loadChildren:() => import('./component/home/home.module').then(m => m.HomeModule)},
  {
    path: 'inventory-mngt',
    component: LayoutComponent,
    children: [
      {path:'',redirectTo:'dashboard',pathMatch:'full'},
      {path:'register',loadChildren:() => import('./component/register/register.module').then(m => m.RegisterModule)},
      {path:'forgot-password',loadChildren:() => import('./component/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)},
      {path:'change-password',loadChildren:() => import('./component/change-password/change-password.module').then(m => m.ChangePasswordModule),canActivate:[AuthGuard]},
      {path:'dashboard',loadChildren:() => import('./component/dashboard/dashboard.module').then(m => m.DashboardModule),canActivate:[AuthGuard]},
      {path:'master/company',loadChildren:() => import('./component/company-master/company-master.module').then(m => m.CompanyMasterModule),canActivate:[AuthGuard]},
      {path:'master/category',loadChildren:() => import('./component/category-master/category-master.module').then(m => m.CategoryMasterModule),canActivate:[AuthGuard]},
      {path:'master/sub-category',loadChildren:() => import('./component/sub-category-master/sub-category-master.module').then(m => m.SubCategoryMasterModule),canActivate:[AuthGuard]},
      {path:'master/unit',loadChildren:() => import('./component/unit-master/unit-master.module').then(m => m.UnitMasterModule),canActivate:[AuthGuard]},
      {path:'master/stock',loadChildren:() => import('./component/stock-master/stock-master.module').then(m => m.StockMasterModule),canActivate:[AuthGuard]},
      {path:'master/user',loadChildren:() => import('./component/user-master/user-master.module').then(m => m.UserMasterModule),canActivate:[AuthGuard]},
      {path:'master/customer',loadChildren:() => import('./component/customer-master/customer-master.module').then(m => m.CustomerMasterModule),canActivate:[AuthGuard]},
      {path:'master/supplier',loadChildren:() => import('./component/supplier-master/supplier-master.module').then(m => m.SupplierMasterModule),canActivate:[AuthGuard]},
      {path:'master/tax',loadChildren:() => import('./component/tax-master/tax-master.module').then(m => m.TaxMasterModule),canActivate:[AuthGuard]},
      {path:'sales',loadChildren:() => import('./component/order/order.module').then(m => m.OrderModule),canActivate:[AuthGuard]},
      {path:'purchase',loadChildren:() => import('./component/purchase/purchase.module').then(m => m.PurchaseModule),canActivate:[AuthGuard]},
      {path:'payment',loadChildren:() => import('./component/payment/payment.module').then(m => m.PaymentModule),canActivate:[AuthGuard]},
      {path:'report',loadChildren:() => import('./component/reports/reports.module').then(m => m.ReportsModule),canActivate:[AuthGuard]},
      {path:'profile',loadChildren:() => import('./component/profile/profile.module').then(m => m.ProfileModule),canActivate:[AuthGuard]},
      {path:'company-info',loadChildren:() => import('./component/company-info/company-info.module').then(m => m.CompanyInfoModule),canActivate:[AuthGuard]},
      {path:'product-buy',loadChildren:() => import('./component/product-buy/product-buy.module').then(m => m.ProductBuyModule),canActivate:[AuthGuard]},
      {path:'settings/barcode-generate',loadChildren:() => import('./component/settings/barcode-generate/barcode-generate.module').then(m => m.BarcodeGenerateModule),canActivate:[AuthGuard]},
      {path:'message',loadChildren:() => import('./component/message/message.module').then(m => m.MessageModule),canActivate:[AuthGuard]},
      {path:'schedule-calender',loadChildren:() => import('./component/schedule-calender/schedule-calender.module').then(m => m.ScheduleCalenderModule),canActivate:[AuthGuard]},
  ]
  },
 
  // {path:'**',loadChildren:() => import('./component/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)}
  { path: '**', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
