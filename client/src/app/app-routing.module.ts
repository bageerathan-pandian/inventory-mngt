import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { LayoutComponent } from './shared/layout/layout.component';
import { InvoiceDesignLayoutComponent } from './shared/layout/invoice-design-layout/invoice-design-layout.component';
import { PrintComponent } from './component/inventory-mngt/print/print.component';

const routes: Routes = [
  // {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'',loadChildren:() => import('./component/home/home.module').then(m => m.HomeModule)},
  {path:'login',loadChildren:() => import('./component/login/login.module').then(m => m.LoginModule)},
  {path:'register',loadChildren:() => import('./component/register/register.module').then(m => m.RegisterModule)},
  {path:'forgot-password',loadChildren:() => import('./component/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)},
  {path:'reset-password/:id/:token',loadChildren:() => import('./component/reset-password/reset-password.module').then(m => m.ResetPasswordModule)},
  {path:'email-verify/:id/:token',loadChildren:() => import('./component/email-verify/email-verify.module').then(m => m.EmailVerifyModule)},
  {path:'home',loadChildren:() => import('./component/home/home.module').then(m => m.HomeModule)},
  {path:'about-us',loadChildren:() => import('./component/about-us/about-us.module').then(m => m.AboutUsModule)},
  {path:'services',loadChildren:() => import('./component/services/services.module').then(m => m.ServicesModule)},
  {path:'pricing',loadChildren:() => import('./component/pricing/pricing.module').then(m => m.PricingModule)},
  {path:'contact-us',loadChildren:() => import('./component/contact-us/contact-us.module').then(m => m.ContactUsModule)},
  {
    path: 'inventory-mngt',
    component: LayoutComponent,
    children: [
      {path:'change-password',loadChildren:() => import('./component/inventory-mngt/user/change-password/change-password.module').then(m => m.ChangePasswordModule),canActivate:[AuthGuard]},
      {path:'dashboard',loadChildren:() => import('./component/inventory-mngt/dashboard/dashboard.module').then(m => m.DashboardModule),canActivate:[AuthGuard]},
      {path:'master',loadChildren:() => import('./component/inventory-mngt/master/master.module').then(m => m.MasterModule),canActivate:[AuthGuard]},
      {path:'sales/sales',loadChildren:() => import('./component/inventory-mngt/sales/sales/sales.module').then(m => m.SalesModule),canActivate:[AuthGuard]},
      {path:'sales/sales-return',loadChildren:() => import('./component/inventory-mngt/sales/sales-return/sales-return.module').then(m => m.SalesReturnModule),canActivate:[AuthGuard]},
      {path:'purchase/purchase',loadChildren:() => import('./component/inventory-mngt/purchase/purchase/purchase.module').then(m => m.PurchaseModule),canActivate:[AuthGuard]},
      {path:'purchase/purchase-return',loadChildren:() => import('./component/inventory-mngt/purchase/purchase-return/purchase-return.module').then(m => m.PurchaseReturnModule),canActivate:[AuthGuard]},
      {path:'payment',loadChildren:() => import('./component/inventory-mngt/payment/payment.module').then(m => m.PaymentModule),canActivate:[AuthGuard]},      
      {path:'reports', loadChildren: () => import('./component/inventory-mngt/reports/reports.module').then(m => m.ReportsModule),canActivate:[AuthGuard]},    
      {path:'profile',loadChildren:() => import('./component/inventory-mngt/user/profile/profile.module').then(m => m.ProfileModule),canActivate:[AuthGuard]},
      {path:'company-info',loadChildren:() => import('./component/inventory-mngt/user/company-info/company-info.module').then(m => m.CompanyInfoModule),canActivate:[AuthGuard]},
      {path:'product-buy',loadChildren:() => import('./component/inventory-mngt/user/product-buy/product-buy.module').then(m => m.ProductBuyModule),canActivate:[AuthGuard]},
      {path:'settings/barcode-generate',loadChildren:() => import('./component/inventory-mngt/settings/barcode-generate/barcode-generate.module').then(m => m.BarcodeGenerateModule),canActivate:[AuthGuard]},
      {path:'settings/invoice-setup',loadChildren:() => import('./component/inventory-mngt/settings/invoice-setup/invoice-setup.module').then(m => m.InvoiceSetupModule),canActivate:[AuthGuard]},
      {path:'message',loadChildren:() => import('./component/inventory-mngt/message/message.module').then(m => m.MessageModule),canActivate:[AuthGuard]},
      {path:'schedule-calender',loadChildren:() => import('./component/inventory-mngt/schedule-calender/schedule-calender.module').then(m => m.ScheduleCalenderModule),canActivate:[AuthGuard]},
      {path:'contact',loadChildren:() => import('./component/inventory-mngt/contact/contact.module').then(m => m.ContactModule),canActivate:[AuthGuard]},      
      {path:'**',loadChildren:() => import('./component/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)}
  ]
  },   
  // { path: 'print', loadChildren: () => import('./component/inventory-mngt/print/print.module').then(m => m.PrintModule) },
  { 
    path: 'print',
    outlet: 'print',
    component: InvoiceDesignLayoutComponent,
    children: [
      // { path: 'invoice', loadChildren: () => import('./component/inventory-mngt/print/print.module').then(m => m.PrintModule) },
      { path: 'invoice', component: PrintComponent },
      // { path:'**',loadChildren:() => import('./component/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)}
    ]
  },
  { path: 'company/:company-slug', loadChildren: () => import('./component/e-commerce/company/company.module').then(m => m.CompanyModule) },
  { path: 'company/:company-slug/products', loadChildren: () => import('./component/e-commerce/company/products/products.module').then(m => m.ProductsModule) },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
