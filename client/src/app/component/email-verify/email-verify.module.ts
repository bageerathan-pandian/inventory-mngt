import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailVerifyRoutingModule } from './email-verify-routing.module';
import { EmailVerifyComponent } from './email-verify.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [EmailVerifyComponent],
  imports: [
    CommonModule,
    EmailVerifyRoutingModule,
    ReactiveFormsModule,
    CardModule,
    MessageModule,
    MessagesModule,
    HeaderModule,
    FooterModule,
    ProgressSpinnerModule,
    ButtonModule
  ]
})
export class EmailVerifyModule { }
