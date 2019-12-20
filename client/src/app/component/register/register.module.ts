import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import {CardModule} from 'primeng/card';
import {StepsModule} from 'primeng/steps';
import {CaptchaModule} from 'primeng/captcha';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import {StripeCheckoutModule} from 'ng-stripe-checkout';
import {RadioButtonModule} from 'primeng/radiobutton';
import { NgxSpinnerModule } from "ngx-spinner";
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import {InplaceModule} from 'primeng/inplace';
import {Ng2TelInputModule} from 'ng2-tel-input';
import {KeyFilterModule} from 'primeng/keyfilter';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    CardModule,
    StepsModule,
    CaptchaModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    MessagesModule,
    InputMaskModule,    
    InputTextModule,
    PasswordModule,    
    GooglePlaceModule,
    StripeCheckoutModule,
    RadioButtonModule,
    NgxSpinnerModule,
    HeaderModule,
    FooterModule,
    InplaceModule,    
    Ng2TelInputModule,
    KeyFilterModule
  ]
})
export class RegisterModule { }
