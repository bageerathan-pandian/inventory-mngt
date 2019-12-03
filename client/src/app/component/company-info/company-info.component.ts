import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { MenuItem, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/shared/company.service';
import { ImageUploadService } from 'src/app/shared/image-upload.service';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {
  companyForm: FormGroup
  status:any
  displayDialog: boolean
  
  private bradCrum: MenuItem[];
  uploadedFiles: any[] = [];

  
  imageChangedEvent: any = '';
  croppedImage: any = '';
  constructor(private auth: AuthService,private userService: UserService, private _fb: FormBuilder, private imageUploadService: ImageUploadService, private router: Router, private companyService: CompanyService, private messageService: MessageService) {
    
    this.status = [
      {label:'Active', value:1},
      {label:'De-Active', value:0},
    ]
    this.companyForm = this._fb.group({
      _id: [this.auth.getUserData().company_details_id._id],
      company_name: [this.auth.getUserData().company_details_id.company_name,Validators.required],
      company_address: [this.auth.getUserData().company_details_id.company_address,Validators.required],
      company_image: [this.auth.getUserData().company_details_id.company_image],
      owner_name: [this.auth.getUserData().company_details_id.owner_name,Validators.required],
      phone: [this.auth.getUserData().company_details_id.phone,Validators.required],
      gstin: [this.auth.getUserData().company_details_id.gstin,Validators.required],
      status: [1,Validators.required]
    })
    
    this.croppedImage = this.auth.getUserData().company_details_id.company_image;
   }

  ngOnInit() {
    this.bradCrum = [
      {label:'',icon: 'pi pi-home',command: (event) => {
        this.router.navigate(['/dashboard'])}
      },
      {
        label: "Company Info",
        command: event => {
          this.router.navigate(["/company-info"]);
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
    this.imageUploadService.imageUpload(this.imageChangedEvent)
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
      this.userService.getUser(this.auth.getUserData()._id)
      .subscribe((data:any)=>{
        console.log('data',data[0]);
        localStorage.setItem('user_details',JSON.stringify(data[0]));

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

  
  
  fileChangeEvent(file: FileList) {
    console.log(file)
    this.imageChangedEvent = file.item(0);
    console.log('imageChangedEvent',this.imageChangedEvent)
     // show image preview
     var render:FileReader = new FileReader();

     render.onloadend = (e) => {
      console.log('reslt',render)
       this.croppedImage = render.result;
     }
     render.readAsDataURL(this.imageChangedEvent);
  
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



}
