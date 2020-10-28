import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { MenuItem, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/shared/company.service';
import { ImageUploadService } from 'src/app/shared/image-upload.service';
import { UserService } from 'src/app/shared/user.service';
import { SessionService } from 'src/app/shared/session.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {
  companyForm: FormGroup
  status:any
  displayDialog: boolean
  
  public bradCrum: MenuItem[];
  uploadedFiles: any[] = [];

  
  imageChangedEvent: any = ''
  croppedImage: any = '';
  constructor(public sessionService: SessionService,private userService: UserService, private _fb: FormBuilder, private imageUploadService: ImageUploadService, private router: Router, private companyService: CompanyService, private messageService: MessageService) {
    
    this.status = [
      {label:'Active', value:1},
      {label:'De-Active', value:0},
    ]
    this.companyForm = this._fb.group({
      _id: [this.sessionService.getItem('company_id')],
      company_name: [this.sessionService.getItem('company_name'),Validators.required],
      company_address: [this.sessionService.getItem('company_address'),Validators.required],
      company_image: [this.sessionService.getItem('company_image')],
      owner_name: [this.sessionService.getItem('owner_name'),Validators.required],
      phone: [this.sessionService.getItem('phone'),Validators.required],
      phone2: [this.sessionService.getItem('phone2'),Validators.required],
      gstin: [this.sessionService.getItem('gstin'),Validators.required],
      status: [1,Validators.required]
    })
    
    this.croppedImage = this.sessionService.getItem('company_image') ? environment.api_url + this.sessionService.getItem('company_image') : null;

   }

  ngOnInit() {
    this.bradCrum = [
      {label:'',icon: 'pi pi-home',command: (event) => {
        this.router.navigate(['/inventory-mngt/dashboard'])}
      },
      {
        label: "Company Info",
        command: event => {
          this.router.navigate(["/inventory-mngt/company-info"]);
        }
      }
    ];
  }

  @ViewChild("placesRef",{static:false}) placesRef : GooglePlaceDirective;
    
  public handleAddressChange(address: Address) {
    console.log('address',address);
  // Do some stuff
  this.companyForm.controls['company_address'].setValue(address.formatted_address);
}

  // showDialogToAdd(company) {
  //   console.log(company)
  //   this.displayDialog = true;
  //   this.companyForm.controls['_id'].setValue(company._id);
  //   this.companyForm.controls['company_name'].setValue(company.company_name);
  //   this.companyForm.controls['company_address'].setValue(company.company_address);
  //   this.companyForm.controls['company_image'].setValue(company.company_image);
  //   this.croppedImage = company.company_image;
  //   this.companyForm.controls['owner_name'].setValue(company.owner_name);
  //   this.companyForm.controls['phone'].setValue(company.phone);
  //   this.companyForm.controls['gstin'].setValue(company.gstin);
  //   this.companyForm.controls['status'].setValue(company.status);
  // }

  imageUpload(){
    console.log(this.imageChangedEvent.target.files.item(0))
    this.imageUploadService.imageUpload(this.imageChangedEvent.target.files.item(0))
    .subscribe((data:any)=>{
      console.log(data)
      this.companyForm.controls['company_image'].setValue(data);
      this.companyUpdate()
    })
  }

  public checkValidity(): void {
    Object.keys(this.companyForm.controls).forEach((key) => {
        this.companyForm.controls[key].markAsDirty();
    });
  }

  companyUpdate(){
    if(this.companyForm.invalid){
      this.checkValidity()
      return false;
    }
    this.companyService.updateCompany(this.companyForm.value)
    .subscribe((data:any)=>{
      console.log('update',data);
      this.displayDialog = false;
      this.messageService.add({severity:'success', summary:'Company Updated Successfully', detail:'Company Updated Successfully'});
      this.userService.getUser()
      .subscribe((data:any)=>{
        console.log('data',data[0]);
        this.sessionService.setUserCredentials(data[0]);
      })
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

    })
  }
  
  onUpdate() {
    console.log('onRowAdd',this.companyForm.value);
    if(this.imageChangedEvent){
      this.imageUpload();   
    } else{
      this.companyUpdate()
    }
  }

  
  
//   fileChangeEvent(file: FileList) {
//     console.log(file)
//     this.imageChangedEvent = file.item(0);
//     console.log('imageChangedEvent',this.imageChangedEvent)
//      // show image preview
//      var render:FileReader = new FileReader();

//      render.onloadend = (e) => {
//       console.log('reslt',render)
//        this.croppedImage = render.result;
//      }
//      render.readAsDataURL(this.imageChangedEvent);
  
// }

fileChangeEvent(event) {
  console.log(event)
  this.displayDialog = true;
  this.imageChangedEvent = event;
}

onConfirm() {  
  this.displayDialog = false;
  
}

onReject() {
  this.displayDialog = false;
}

imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
}
imageLoaded() {
    // show cropper
}
cropperReady() {
    // cropper ready
}
loadImageFailed() {
    // show message
}


onCountryChange(event) {
  console.log(event);  
 }

}
