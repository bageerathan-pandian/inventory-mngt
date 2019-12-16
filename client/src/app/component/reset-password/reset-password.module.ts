import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { ResetPasswordComponent } from './reset-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { MessageModule } from '../inventory-mngt/message/message.module';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { PasswordModule } from 'primeng/password';


@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
    ReactiveFormsModule,
    CardModule,
    MessageModule,
    MessagesModule,
    ButtonModule,
    NgxSpinnerModule,
    HeaderModule,
    FooterModule,
    PasswordModule
  ]
})
export class ResetPasswordModule { }
