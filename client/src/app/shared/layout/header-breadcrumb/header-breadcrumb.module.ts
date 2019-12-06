import { NgModule } from '@angular/core';
import { HeaderBreadcrumbComponent } from 'src/app/shared/layout/header-breadcrumb/header-breadcrumb.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
// import { AppCommonModule } from 'src/app/app.common.module';

@NgModule({
  imports: [
    // AppCommonModule,
    BreadcrumbModule
  ],
  declarations: [
    HeaderBreadcrumbComponent,
  ],
  exports: [
    HeaderBreadcrumbComponent
  ]
})
export class HeaderBreadCrumbModule { }