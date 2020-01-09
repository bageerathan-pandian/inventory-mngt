import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceSetupRoutingModule } from './invoice-setup-routing.module';
import { CardModule } from 'primeng/card';
import { InvoiceSetupComponent } from './invoice-setup.component';
import { SafePipeModule } from 'safe-pipe';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [InvoiceSetupComponent],
  imports: [
    CommonModule,
    InvoiceSetupRoutingModule,
    CardModule,
    SafePipeModule,
    ButtonModule,
    SharedModule
  ]
})
export class InvoiceSetupModule { }
