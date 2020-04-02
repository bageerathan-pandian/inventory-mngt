import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/shared/company.service';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import * as _ from 'lodash';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { CommonService } from 'src/app/shared/common.service';
import { AuthService } from 'src/app/shared/auth.service';
import { ImageUploadService } from 'src/app/shared/image-upload.service';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/model/user.model';
import { ProductPayment } from 'src/app/model/product_payment.model';
import * as moment from 'moment';

@Component({
  selector: 'app-company-master',
  templateUrl: './company-master.component.html',
  styleUrls: ['./company-master.component.scss'],
  providers: [ConfirmationService]
})
export class CompanyMasterComponent implements OnInit {

  loading: boolean;
  public bradCrum: MenuItem[];
  displayDialog: boolean;
  productPaymentForm:FormGroup
  companyForm:FormGroup
  userForm:FormGroup
  car: any = {};
  cols: any[];
  status:any = [];
  plan: any =[]
  companyList: User[];
  data:any;
  
  logoImageChangedEvent: any = '';
  profileImageChangedEvent: any = '';
  croppedImage: any = '';
  croppedImage1: any = '';
  activeIndex: number = 0;
  items: MenuItem[];
  roleList:any
  emailCheckStatus:any  
  futureMonthEnd = moment().add(1, 'M');
  
  constructor(private router:Router,private _fb: FormBuilder,private auth:AuthService, private confirmationService: ConfirmationService,private messageService: MessageService,private companyService:CompanyService, private commonService: CommonService, private imageUploadService: ImageUploadService,private userService: UserService) {
    this.bradCrum = [
      {label:'',icon: 'pi pi-home',command: (event) => {
        this.router.navigate(['/inventory-mngt/dashboard'])}
      },
      {label:'Master',command: (event) => {
        this.router.navigate(["/inventory-mngt/master"]);
    }},
      {label:'Company'},
  ];

  
    this.roleList = [
      {label:'Admin', value:1}
    ]
  
    this.status = [
      {label:'Active', value:1, disabled: false},
      {label:'De-Active', value:0, disabled: false},
      {label:'Expired', value:2, disabled: true}
    ]

    this.plan = [
      {label:'Free', value:0},
      {label:'Paid', value:1}
    ]

    this.productPaymentForm = this._fb.group({
      _id: [''],
      plan_type: ['0',Validators.required],
      payment_amount: [14999,Validators.required],
      currency: ['INR',Validators.required],
      payment_details: ['',Validators.required],
      expiry_date: [null,Validators.required],
      status: ['0',Validators.required]
    })

    this.companyForm = this._fb.group({
      _id: [''],
      company_code: ['',Validators.required],
      company_name: ['',Validators.required],
      company_image: [''],
      company_address: ['',Validators.required],
      owner_name: ['',Validators.required],
      country_code: ['in',Validators.required],
      country_dialCode: [91,Validators.required],
      phone: ['',Validators.required],
      gstin: [''],
      product_payment_details_id: [''],
      status: [1,Validators.required]
    })

    this.userForm = this._fb.group({
      _id: [''],
      user_code: ['u-0001',Validators.required],
      user_name: ['',Validators.required],
      user_image: [''],
      user_email: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
      user_pwd: ['',Validators.required],
      cnfirm_user_pwd: ['',Validators.required],
      company_details_id:['',Validators.required],
      phone:[''],
      role: [1,Validators.required],
      status: [1,Validators.required]
    })

    this.cols = [
      // { field: '_id', header: '#' },
      { field: 'company_code', header: 'Code' },
      { field: 'company_name', header: 'Company Name' },
      { field: 'company_address', header: 'Company Address' },
      { field: 'owner_name', header: 'Owner Name' },
      { field: 'phone', header: 'Phone' },
      { field: 'plan_type', header: 'Plan Type' },
      { field: 'payment_amount', header: 'Paid Amount' },
      { field: 'expiry_date', header: 'Expiry Date' },
      { field: 'updatedAt', header: 'Updated Date' },
      { field: 'status', header: 'Status' }
      // { field: '', header: 'Action' }
  ];
  this.items = [{
    label: 'Company',
    command: (event: any) => {
        this.activeIndex = 0;
        this.messageService.add({severity:'info', summary:'First Step', detail: event.item.label});
    }
  },
  {
    label: 'Admin User',
    command: (event: any) => {
        this.activeIndex = 1;
        this.messageService.add({severity:'info', summary:'Seat Selection', detail: event.item.label});
    }
  }
  ];
   
  }

  ngOnInit() {

    this.getCompanyAdminUsers();
  }

  @ViewChild("placesRef",{static:false}) placesRef : GooglePlaceDirective;
    
  public handleAddressChange(address: Address) {
    console.log('address',address);
  // Do some stuff
  this.companyForm.controls['company_address'].setValue(address.formatted_address);
}

getCompanyAdminUsers(){
      this.loading = true
      this.companyService.getCompanyAdminUsers()
      .subscribe((data:any)=>{
        console.log('companyList',data);
        this.companyList = data
        console.log('companyList1',this.companyList);
        this.loading =false;
      })
    }

  showDialogToAdd() {
    this.companyForm.reset();
    this.userForm.reset();
    this.croppedImage = '';
    this.croppedImage1 = '';
    this.companyForm.controls['company_code'].setValue(this.commonService.incrCode('c',this.companyList.length));
    this.companyForm.controls['country_code'].setValue('in');
    this.companyForm.controls['country_dialCode'].setValue(91);
    this.companyForm.controls['status'].setValue(1);
    this.userForm.controls['user_code'].setValue('u-0001');
    this.userForm.controls['status'].setValue(1);
    this.productPaymentForm.controls['plan_type'].setValue(0);
    this.displayDialog = true;
    this.emailCheckStatus = null;
  }

  public checkValidity(): void {
    Object.keys(this.companyForm.controls).forEach((key) => {
        this.companyForm.controls[key].markAsDirty();
    });
  }

  public checkValidity1(): void {
    Object.keys(this.userForm.controls).forEach((key) => {
        this.userForm.controls[key].markAsDirty();
    });
  }

  save() {
    console.log(this.companyForm,this.userForm)
    if(this.companyForm.invalid && this.userForm.invalid){
      this.checkValidity()
      this.checkValidity1()
      return false;
    }
   
    console.log('data',this.companyForm.value);
    if(this.companyForm.value._id){
      if(this.logoImageChangedEvent){
        this.companyLogoUpload();   
      } else{
        // this.onRowUpdateCompany(this.companyForm.value);        
        this.onUpdatePayment()
      }
    }else{     
      if(this.logoImageChangedEvent){
        this.companyLogoUpload();   
      } else{
        // this.onRowAddCompany(this.companyForm.value);
        this.onRegisterPayment()
        } 
    }
  }

  delete(company,index){
    console.log('delete',company,index);
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this company?',
      accept: () => {
          //Actual logic to perform a confirmation
          this.onRowDeleteCompany(company,index);
      }
  });
  }

  
 onRegisterPayment(){
  this.messageService.clear();
  this.productPaymentForm.get('expiry_date').setValue(this.productPaymentForm.value.plan_type == 1 ? null : this.futureMonthEnd)
  this.auth.onRegisterPayment(this.productPaymentForm.value)
  .subscribe((data:any)=>{  
    console.log('data',data);    
    this.companyForm.controls['product_payment_details_id'].setValue(data._id);  
    // this.onRegisterUser();
    this.onRowAddCompany(this.companyForm.value)
  },
  error =>{   
    console.log('er',error);
    this.messageService.add({severity:'error', summary:'Opps!', detail:'Sothing went wrong!'});
  })
 }

 onUpdatePayment(){
  this.messageService.clear();
  this.productPaymentForm.get('expiry_date').setValue(this.productPaymentForm.value.plan_type == 1 ? null : this.futureMonthEnd)
  this.auth.onUpdatePayment(this.productPaymentForm.value)
  .subscribe((data:any)=>{  
    console.log('data',data);    
    this.companyForm.controls['product_payment_details_id'].setValue(data._id);  
    // this.onRegisterUser();
    this.onRowUpdateCompany(this.companyForm.value)
  },
  error =>{   
    console.log('er',error);
    this.messageService.add({severity:'error', summary:'Opps!', detail:'Sothing went wrong!'});
  })
 }

  onRowAddCompany(company) {
    console.log('onRowAdd',company);
    // this.cars.push(newcar); 
    this.companyService.addCompany(company)
    .subscribe((data:any)=>{
      console.log('add company',data);
       
      // this.companyList = [ data,...this.companyList];
    
      console.log('this.companyList',this.companyList);
      this.messageService.add({severity:'success', summary:'Company Added Successfully', detail:'Company Added Successfully'});
      this.displayDialog = false;
      if(this.profileImageChangedEvent){
        this.profileImageUpload(data);   
      } else{        
        this.userForm.controls['company_details_id'].setValue(data._id);
        this.onRowAddUser(this.userForm.value,data);
      }
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

    })
  }
  
  onRowAddUser(user,cdata) {
    console.log('onRowAddUser',user);
    // this.cars.push(newcar); 
    this.userService.addUser(user)
    .subscribe((data:any)=>{
      console.log('add user',data);
      data.company_details_id = cdata // add company details
      this.companyList = [ data,...this.companyList];
    
      console.log('this.companyList',this.companyList);
      this.messageService.add({severity:'success', summary:'User Added Successfully', detail:'User Added Successfully'});
      this.displayDialog = false;
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

    })
  }

  onRowEdit(user: User) {
    console.log(user);
    this.displayDialog = true;
     this.companyForm.controls['_id'].setValue(user.company_details_id._id);
     this.companyForm.controls['company_code'].setValue(user.company_details_id.company_code);
     this.companyForm.controls['company_name'].setValue(user.company_details_id.company_name);
     this.companyForm.controls['company_image'].setValue(user.company_details_id.company_image);
     this.companyForm.controls['company_address'].setValue(user.company_details_id.company_address);
     this.companyForm.controls['owner_name'].setValue(user.company_details_id.owner_name);
     this.companyForm.controls['country_code'].setValue(user.company_details_id.country_code);
     this.companyForm.controls['country_dialCode'].setValue(user.company_details_id.country_dialCode);
     this.companyForm.controls['phone'].setValue(String(user.company_details_id.phone));
     this.companyForm.controls['gstin'].setValue(user.company_details_id.gstin);
     this.companyForm.controls['status'].setValue(user.company_details_id.status);
     this.productPaymentForm.controls['_id'].setValue(user.company_details_id.product_payment_details_id._id);
     this.productPaymentForm.controls['plan_type'].setValue(user.company_details_id.product_payment_details_id.plan_type);
     this.userForm.controls['_id'].setValue(user._id);
     this.userForm.controls['user_code'].setValue(user.user_code);
     this.userForm.controls['user_name'].setValue(user.user_name);
     this.userForm.controls['user_image'].setValue(user.user_image);
     this.userForm.controls['user_email'].setValue(user.user_email);
     this.userForm.controls['user_pwd'].setValue(user.user_pwd);
     this.userForm.controls['cnfirm_user_pwd'].setValue(user.user_pwd);
     this.userForm.controls['company_details_id'].setValue(user.company_details_id._id);
     this.userForm.controls['role'].setValue(user.role);
    //  this.userForm.controls['status'].setValue(user.status);
     this.croppedImage = user.company_details_id.company_image ? user.company_details_id.company_image : '';
     this.croppedImage1 = user.user_image ? user.user_image : '';     
    this.emailCheckStatus = user.user_email ? 1 : null;
  }

  onRowDeleteCompany(company,index) {
    console.log(company,index);
    this.companyService.deleteCompany(company._id)
    .subscribe((data:any)=>{
      console.log('delete',data);
      this.companyList.splice(index, 1);
      this.companyList = [...this.companyList];
      this.messageService.add({severity:'success', summary:'Company Deleted Successfully', detail:'Company Deleted Successfully'});
  
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

    })
  }

  onRowDeleteUser(user,index) {
    console.log(user,index);
    this.companyService.deleteCompany(user._id)
    .subscribe((data:any)=>{
      console.log('delete',data);
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

    })
  }

  onRowUpdateCompany(company) {
    console.log(company);
    this.displayDialog = false;
    company.company_address = (this.companyForm.value.company_address) ? this.companyForm.value.company_address : company.company_address;
    this.companyService.updateCompany(company)
    .subscribe((data:any)=>{
      console.log('update',data);
      let updateData = {
        company_details_id:data._id,
        status: data.status
      }
      this.updateAllUserStatus(updateData)
      this.messageService.add({severity:'success', summary:'Company Updated Successfully', detail:'Company Updated Successfully'});
      if(this.profileImageChangedEvent){
        this.profileImageUpload(data);   
      } else{
        this.userForm.controls['company_details_id'].setValue(data._id);
        this.onRowUpdateUser(this.userForm.value);
      }
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

    })

  }

  onRowUpdateUser(user) {
    console.log(user);
    this.displayDialog = false;
    this.userService.updateUser(user)
    .subscribe((data:any)=>{
      console.log('update',data);
      
      this.getCompanyAdminUsers()
      this.messageService.add({severity:'success', summary:'User Updated Successfully', detail:'User Updated Successfully'});
  
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

    })

  }

  updateAllUserStatus(data){
    this.userService.updateAllUsers(data)
    .subscribe(data=>{
      console.log('updateAllUserStatus',data)
      this.messageService.add({severity:'success', summary:'All User Updated Successfully', detail:'User Updated Successfully'});
  
    },
    error =>{
      console.log(error);
      this.messageService.add({severity:'error', summary:'Oopss!', detail:'Something went wrong!'});

    })

  }
  
  onChangeStatus(event){
    console.log(event);
    let value = event.value;
  }

  companyLogoUpload(){
    this.imageUploadService.companyLogoUpload(this.logoImageChangedEvent)
    .subscribe((data:any)=>{
      console.log(data)
      this.companyForm.controls['company_image'].setValue(data);
        if(this.companyForm.value._id){
          // this.onRowUpdateCompany(this.companyForm.value);   
          this.onUpdatePayment()
        } else{
          // this.onRowAddCompany(this.companyForm.value); 
          this.onRegisterPayment()
        }
    })
  }

  profileImageUpload(cdata){
    this.imageUploadService.profileImageUpload(this.profileImageChangedEvent)
    .subscribe((data:any)=>{
      console.log(data)
      this.userForm.controls['user_image'].setValue(data);
      if(this.companyForm.value._id){
        this.onRowUpdateUser(this.userForm.value);   
      } else{
        this.onRowAddUser(this.userForm.value,cdata);
      }
    })
  }

  
  fileChangeEvent(file: FileList) {
    console.log(file)
    this.logoImageChangedEvent = file.item(0);
    console.log('imageChangedEvent',this.logoImageChangedEvent)
     // show image preview
     var render:FileReader = new FileReader();

     render.onloadend = (e) => {
      console.log('reslt',render)
       this.croppedImage = render.result;
     }
     render.readAsDataURL(this.logoImageChangedEvent);  
  }

  fileChangeEvent1(file: FileList) {
    console.log(file)
    this.profileImageChangedEvent = file.item(0);
    console.log('profileImageChangedEvent',this.profileImageChangedEvent)
     // show image preview
     var render:FileReader = new FileReader();

     render.onloadend = (e) => {
      console.log('reslt',render)
       this.croppedImage1 = render.result;
     }
     render.readAsDataURL(this.profileImageChangedEvent);  
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

onCheckEmailExist(){
  console.log('valid',this.userForm.controls['user_email'].invalid);
  if(this.userForm.value.user_email != '' && this.userForm.controls['user_email'].invalid){      
    this.emailCheckStatus = null;
    return false
  }
  this.emailCheckStatus = null;
  console.log('onCheckEmailExist',this.userForm.value.user_email);  
  let _id = this.userForm.value._id
  var sliceIndex = _.findIndex(this.companyList, function (o) { return o._id == _id; });
  console.log(sliceIndex);
  if (sliceIndex > -1) {
    if(this.companyList[sliceIndex].user_email == this.userForm.value.user_email){ // when not change
      this.emailCheckStatus = 1;
      return false;
    }
  }
  this.emailCheckStatus = 0;
  this.userService.onCheckEmailExist(this.userForm.value.user_email)
  .subscribe((data:any)=>{  
    console.log('data',data);   
    if(data.length != 0){
      this.emailCheckStatus = 2;
      this.messageService.add({severity:'warn', summary:'Warning!', detail:'Email already exist!'});
      this.userForm.controls['user_email'].setErrors({ 'emailExist': true })
      this.userForm.controls['user_email'].markAsDirty();
    }else{
      this.messageService.clear();
      this.emailCheckStatus = 1;
      this.userForm.controls['user_email'].setErrors({ 'emailExist': null })
      this.userForm.controls['user_email'].updateValueAndValidity();
    } 
  },
  error =>{   
    console.log('er',error);
    this.messageService.add({severity:'error', summary:'Opps!', detail:'Sothing went wrong!'});
  })
 }

 onCountryChange(event) {
  console.log(event);  
  this.companyForm.get('country_code').setValue(event.iso2)
  this.companyForm.get('country_dialCode').setValue(event.dialCode)
  // console.log(obj.s.dialCode);
  // obj.setCountry('in');
}

}

