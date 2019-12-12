import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MegaMenuModule} from 'primeng/megamenu';
import {GMapModule} from 'primeng/gmap';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MegaMenuModule,
    GMapModule,
    HeaderModule,
    FooterModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
