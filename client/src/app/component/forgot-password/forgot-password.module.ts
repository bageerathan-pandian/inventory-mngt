import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { ButtonModule } from 'primeng/button';
import { NgxSpinnerModule } from "ngx-spinner";
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    MessageModule,
    MessagesModule,
    ButtonModule,
    ForgotPasswordRoutingModule,
    NgxSpinnerModule,
    HeaderModule,
    FooterModule
  ]
})
export class ForgotPasswordModule { }
