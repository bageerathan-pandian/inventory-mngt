import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

import { DisqusModule } from "ngx-disqus";

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,    
    HeaderModule,
    FooterModule,
    DisqusModule
    // DisqusModule.forRoot('ownwaysoft')
  ]
})
export class ServicesModule { }
