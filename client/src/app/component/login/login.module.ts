import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import {CheckboxModule} from 'primeng/checkbox';
import { NgxSpinnerModule } from "ngx-spinner";
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    CheckboxModule,
    NgxSpinnerModule,
    HeaderModule,
    FooterModule,
    DialogModule
  ]
})
export class LoginModule { }
