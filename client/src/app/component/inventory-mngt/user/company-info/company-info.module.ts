import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyInfoRoutingModule } from './company-info-routing.module';
import { CompanyInfoComponent } from './company-info.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ChartModule } from 'primeng/chart';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { InputMaskModule } from 'primeng/inputmask';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { Ng2TelInputModule } from 'ng2-tel-input';

@NgModule({
  declarations: [CompanyInfoComponent],
  imports: [
    CommonModule,
    CompanyInfoRoutingModule,
    CardModule,
    FormsModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    PasswordModule,
    BreadcrumbModule,
    ConfirmDialogModule,
    ToastModule,
    InputSwitchModule,
    ChartModule,
    GooglePlaceModule,
    InputMaskModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    ImageCropperModule,
    Ng2TelInputModule
  ]
})
export class CompanyInfoModule { }
