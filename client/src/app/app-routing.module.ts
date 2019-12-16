import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  // {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'',loadChildren:() => import('./component/home/home.module').then(m => m.HomeModule)},
  {path:'login',loadChildren:() => import('./component/login/login.module').then(m => m.LoginModule)},
  {path:'register',loadChildren:() => import('./component/register/register.module').then(m => m.RegisterModule)},
  {path:'forgot-password',loadChildren:() => import('./component/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)},
  {path:'reset-password/:id/:token',loadChildren:() => import('./component/reset-password/reset-password.module').then(m => m.ResetPasswordModule)},
  {path:'email-verify/:id',loadChildren:() => import('./component/reset-password/reset-password.module').then(m => m.ResetPasswordModule)},
  {path:'home',loadChildren:() => import('./component/home/home.module').then(m => m.HomeModule)},
  {
    path: 'inventory-mngt',
    component: LayoutComponent,
    children: [
      {path:'change-password',loadChildren:() => import('./component/inventory-mngt/user/change-password/change-password.module').then(m => m.ChangePasswordModule),canActivate:[AuthGuard]},
      {path:'dashboard',loadChildren:() => import('./component/inventory-mngt/dashboard/dashboard.module').then(m => m.DashboardModule),canActivate:[AuthGuard]},
      {path:'master/company',loadChildren:() => import('./component/inventory-mngt/master/company-master/company-master.module').then(m => m.CompanyMasterModule),canActivate:[AuthGuard]},
      {path:'master/category',loadChildren:() => import('./component/inventory-mngt/master/category-master/category-master.module').then(m => m.CategoryMasterModule),canActivate:[AuthGuard]},
      {path:'master/sub-category',loadChildren:() => import('./component/inventory-mngt/master/sub-category-master/sub-category-master.module').then(m => m.SubCategoryMasterModule),canActivate:[AuthGuard]},
      {path:'master/unit',loadChildren:() => import('./component/inventory-mngt/master/unit-master/unit-master.module').then(m => m.UnitMasterModule),canActivate:[AuthGuard]},
      {path:'master/stock',loadChildren:() => import('./component/inventory-mngt/master/stock-master/stock-master.module').then(m => m.StockMasterModule),canActivate:[AuthGuard]},
      {path:'master/user',loadChildren:() => import('./component/inventory-mngt/master/user-master/user-master.module').then(m => m.UserMasterModule),canActivate:[AuthGuard]},
      {path:'master/customer',loadChildren:() => import('./component/inventory-mngt/master/customer-master/customer-master.module').then(m => m.CustomerMasterModule),canActivate:[AuthGuard]},
      {path:'master/supplier',loadChildren:() => import('./component/inventory-mngt/master/supplier-master/supplier-master.module').then(m => m.SupplierMasterModule),canActivate:[AuthGuard]},
      {path:'master/tax',loadChildren:() => import('./component/inventory-mngt/master/tax-master/tax-master.module').then(m => m.TaxMasterModule),canActivate:[AuthGuard]},
      {path:'sales',loadChildren:() => import('./component/inventory-mngt/order/order.module').then(m => m.OrderModule),canActivate:[AuthGuard]},
      {path:'purchase',loadChildren:() => import('./component/inventory-mngt/purchase/purchase.module').then(m => m.PurchaseModule),canActivate:[AuthGuard]},
      {path:'payment',loadChildren:() => import('./component/inventory-mngt/payment/payment.module').then(m => m.PaymentModule),canActivate:[AuthGuard]},
      {path:'report',loadChildren:() => import('./component/inventory-mngt/reports/reports.module').then(m => m.ReportsModule),canActivate:[AuthGuard]},
      {path:'profile',loadChildren:() => import('./component/inventory-mngt/user/profile/profile.module').then(m => m.ProfileModule),canActivate:[AuthGuard]},
      {path:'company-info',loadChildren:() => import('./component/inventory-mngt/user/company-info/company-info.module').then(m => m.CompanyInfoModule),canActivate:[AuthGuard]},
      {path:'product-buy',loadChildren:() => import('./component/inventory-mngt/user/product-buy/product-buy.module').then(m => m.ProductBuyModule),canActivate:[AuthGuard]},
      {path:'settings/barcode-generate',loadChildren:() => import('./component/inventory-mngt/settings/barcode-generate/barcode-generate.module').then(m => m.BarcodeGenerateModule),canActivate:[AuthGuard]},
      {path:'message',loadChildren:() => import('./component/inventory-mngt/message/message.module').then(m => m.MessageModule),canActivate:[AuthGuard]},
      {path:'schedule-calender',loadChildren:() => import('./component/inventory-mngt/schedule-calender/schedule-calender.module').then(m => m.ScheduleCalenderModule),canActivate:[AuthGuard]},
      {path:'contact',loadChildren:() => import('./component/inventory-mngt/contact/contact.module').then(m => m.ContactModule),canActivate:[AuthGuard]},
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
