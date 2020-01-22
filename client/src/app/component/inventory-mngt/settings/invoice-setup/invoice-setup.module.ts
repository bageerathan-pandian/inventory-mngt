import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceSetupRoutingModule } from './invoice-setup-routing.module';
import { CardModule } from 'primeng/card';
import { InvoiceSetupComponent } from './invoice-setup.component';
import { SafePipeModule } from 'safe-pipe';
import { ButtonModule } from 'primeng/button';
import { InvoiceDesignModule } from '../../shared/invoice-design/invoice-design.module';
import { InvoiceDesignPosModule } from '../../shared/invoice-design-pos/invoice-design-pos.module';


@NgModule({
  declarations: [InvoiceSetupComponent],
  imports: [
    CommonModule,
    InvoiceSetupRoutingModule,
    CardModule,
    SafePipeModule,
    ButtonModule,
    InvoiceDesignModule,
    InvoiceDesignPosModule
  ]
})
export class InvoiceSetupModule { }
