import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductBuyRoutingModule } from './product-buy-routing.module';
import { ProductBuyComponent } from './product-buy.component';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { StripeCheckoutModule } from 'ng-stripe-checkout';


@NgModule({
  declarations: [ProductBuyComponent],
  imports: [
    CommonModule,
    ProductBuyRoutingModule,
    ButtonModule,
    StripeCheckoutModule,
    CardModule
  ]
})
export class ProductBuyModule { }
