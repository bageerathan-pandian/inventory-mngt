import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyMasterRoutingModule } from './company-master-routing.module';
import { CompanyMasterComponent } from './company-master.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { InputMaskModule } from 'primeng/inputmask';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { PasswordModule } from 'primeng/password';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ChartModule } from 'primeng/chart';
import { ImageCropperModule } from 'ngx-image-cropper';
import {FileUploadModule} from 'primeng/fileupload';
import { StepsModule } from 'primeng/steps';
import {Ng2TelInputModule} from 'ng2-tel-input';

@NgModule({
  declarations: [CompanyMasterComponent],
  imports: [
    CommonModule,
    CompanyMasterRoutingModule,    
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
    FileUploadModule,
    StepsModule,
    Ng2TelInputModule
  ]
})
export class CompanyMasterModule { }
