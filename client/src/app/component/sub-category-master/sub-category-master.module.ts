import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubCategoryMasterRoutingModule } from './sub-category-master-routing.module';
import { SubCategoryMasterComponent } from './sub-category-master.component';


@NgModule({
  declarations: [SubCategoryMasterComponent],
  imports: [
    CommonModule,
    SubCategoryMasterRoutingModule
  ]
})
export class SubCategoryMasterModule { }
