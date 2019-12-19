import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import {StripeCheckoutLoader, StripeCheckoutHandler} from 'ng-stripe-checkout';
import { ProductPayment } from 'src/app/model/product_payment.model';
import * as moment from 'moment';
import { CommonService } from 'src/app/shared/common.service';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionService } from 'src/app/shared/session.service';
declare var io: any

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private stripeCheckoutHandler: StripeCheckoutHandler;
  
  successRegister: boolean = false;
  items:any  
  activeIndex: number = 0;
  planForm:FormGroup
  companyForm:FormGroup
  userForm:FormGroup
  paymentForm:FormGroup 
  resendVerifyForm: FormGroup
  futureMonthEnd = moment().add(1, 'M');
  emailCheckStatus : any
  private socket;
  site_key:string
  constructor(private messageService: MessageService, private _fb: FormBuilder,private auth: AuthService, private router:Router,
    private stripeCheckoutLoader: StripeCheckoutLoader, private commonService: CommonService,
    private spinner: NgxSpinnerService,
    public sessionService: SessionService
    ) {
      this.socket = io(environment.api_url);
      this.site_key = environment.site_key;
      this.planForm = this._fb.group({
        plan_type: ['',Validators.required]
      })

      this.companyForm = this._fb.group({
        _id: [''],
        company_code: [''],
        company_name: ['',Validators.required],
        owner_name: ['',Validators.required],
        company_address: ['',Validators.required],
        phone: ['',Validators.required],
        gstin: [''],
        status: [1]
      })

    this.userForm = this._fb.group({
      _id: [''],
      user_code: ['u-0001',Validators.required],
      user_name: ['',Validators.required],
      user_email:  ['',[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
      user_pwd: ['',Validators.required],
      cnfirm_user_pwd: ['',Validators.required],
      phone: ['',Validators.required],
      company_details_id: [''],
      role: [1], // 0-admin, 1- others
      status: [1]
    })

    this.resendVerifyForm = this._fb.group({
      _id: [this.sessionService.getItem('_id')],
      user_name: [this.sessionService.getItem('user_name'),Validators.required],
      user_email:  [this.sessionService.getItem('user_email'),[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
    })
    
   }


  ngOnInit() {
    
    this.items = [
      {
        label: 'Plan Details',
        command: (event: any) => {
            this.activeIndex = 0;
            // this.messageService.add({severity:'info', summary:'Pay with CC', detail: event.item.label});
        }
    },
      {      
      label: 'Compnay Details',
      command: (event: any) => {
          this.activeIndex = 1;
          // this.messageService.add({severity:'info', summary:'First Step', detail: event.item.label});
      }
  },
  {
      label: 'Personal Details',
      command: (event: any) => {
          this.activeIndex = 2;
          // this.messageService.add({severity:'info', summary:'Last Step', detail: event.item.label});
      }
  },
  {
      label: 'Confirmation',
      command: (event: any) => {
          this.activeIndex = 3;
          // this.messageService.add({severity:'info', summary:'Last Step', detail: event.item.label});
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

  back(val){   
    console.log('val',val) 
    this.activeIndex = val;
    this.messageService.clear();
  }

 
   selectPlanType(val:Number){
    this.planForm.controls['plan_type'].setValue(val);    
    // this.activeIndex = 1;
    this.onSaveData(1)
   }

  onSaveData(val){   
    
    if(val == 1){
      if(this.planForm.invalid){
        this.checkValidityPlan()
        return false;
      }
    }else if(val == 2){
      if(this.companyForm.invalid){
        this.checkValidityCompany()
        return false;
      }
    } else if(val == 3){
      if(this.userForm.invalid){
        this.checkValidityUser()
        return false;
      }
    }  
    this.activeIndex = val;
    this.messageService.clear();
  }

  passwordMatch() {
    let newPassword = this.userForm.value.user_pwd;
    let confirmPassword = this.userForm.value.cnfirm_user_pwd;
    if (confirmPassword != '') {
      if (newPassword != confirmPassword) {
        console.log('not eq');
        console.log(this.userForm);
        this.userForm.controls['cnfirm_user_pwd'].setErrors({ 'nopasswordmatch': true })
        this.userForm.controls['cnfirm_user_pwd'].markAsDirty();
        // this.utilities.presentToast('Confirm password not match!','warning');
      } else {
        console.log('eq');        
        this.userForm.controls['cnfirm_user_pwd'].setErrors({ 'nopasswordmatch': null })
        this.userForm.controls['cnfirm_user_pwd'].updateValueAndValidity();
      }
    } else {
    }

  }

 

  onRegisterCompany(){
    this.messageService.clear();
  this.auth.onRegisterCompany(this.companyForm.value)
  .subscribe((data:any)=>{  
    console.log('data',data); 
    this.userForm.controls['company_details_id'].setValue(data._id); 
    
    if (this.planForm.value.plan_type == 1) {
      this.onBuyProduct(data);
      return false;
    }else{
      let payData:ProductPayment = {
        plan_type : 0,
        payment_amount : 15000,
        currency: 'INR',
        company_details_id: data,
        payment_details: '',
        expiry_date: this.futureMonthEnd,
        status: 0
    }
    this.onRegisterPayment(payData)
    }
  },
  error =>{   
    console.log('er',error);
    this.messageService.add({severity:'error', summary:'Opps!', detail:'Sothing went wrong!'});
  })
 }

 onRegisterUser(){
  this.messageService.clear();
  this.auth.onRegisterUser(this.userForm.value)
  .subscribe((data:any)=>{  
    console.log('onRegisterUser',data); 
    this.spinner.hide() 
    if(data.status == 1){      
      this.successRegister = true;     
      this.sessionService.setItem('_id',data._id);
      this.sessionService.setItem('user_name',data.user_name);
      this.sessionService.setItem('user_email',data.user_email);
      this.sessionService.setItem('user_pwd',data.user_pwd);
      // this.sessionService.setUserCredentials(data.user)
    }else if(data.status == 0){ 
      this.successRegister = true; 
      this.messageService.add({severity:'warn', summary:'Warning!', detail:'Verification email not send!'});
    }else{
      this.messageService.add({severity:'warn', summary:'Warning!', detail:'Please try again!'});
      this.successRegister = false;
    }
  },
  error =>{   
    console.log('er',error);
    this.messageService.add({severity:'error', summary:'Opps!', detail:'Sothing went wrong!'});
    this.successRegister = false;
    this.spinner.hide()
  })
}


 onRegisterPayment(cdata){
  this.messageService.clear();
  this.auth.onRegisterPayment(cdata)
  .subscribe((data:any)=>{  
    console.log('data',data);    
    this.onRegisterUser();
  },
  error =>{   
    console.log('er',error);
    this.messageService.add({severity:'error', summary:'Opps!', detail:'Sothing went wrong!'});
  })
 }

  onRegister(){
    console.log(this.companyForm);
    console.log(this.userForm);
    this.spinner.show()
    this.userForm.controls['phone'].setValue(this.companyForm.value.phone); 
    this.messageService.clear();
    if (this.planForm.invalid) {
      this.activeIndex = 0;
      this.messageService.add({severity:'warn', summary:'Warning!', detail:'Please select plan type!'});
      return false;
    }
    if (this.companyForm.invalid) {
      this.activeIndex = 1;
      this.messageService.add({severity:'warn', summary:'Warning!', detail:'Please add company info.!'});
      return false;
    }
    if (this.userForm.invalid) {
      this.activeIndex = 2;
      this.messageService.add({severity:'warn', summary:'Warning!', detail:'Please add personal info.!'});
      return false;
    }

    this.onRegisterCompany();
    
  }

  resendVerifyEmail(){  
    this.resendVerifyForm.controls['_id'].setValue(this.sessionService.getItem('_id'))
    this.resendVerifyForm.controls['user_name'].setValue(this.sessionService.getItem('user_name'))
    console.log('sendVerifyEmail',this.resendVerifyForm) 
    if(this.resendVerifyForm.invalid){
      return;
    } 
    this.spinner.show()
    this.auth.resendVerifyEmail(this.resendVerifyForm.value)
    .subscribe((data:any)=>{  
      console.log('data',data); 
      this.spinner.hide()
      if(data == 1){
        this.sessionService.setItem('user_email',this.resendVerifyForm.value.user_email) // update localstoreage values
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Send Successfully'});
      }else if(data == 2){
         this.messageService.add({severity:'warn', summary:'Not send', detail:''});
        }else if(data == 3){
           this.messageService.add({severity:'warn', summary:'Email alredy exist', detail:''});
      }else{
        this.messageService.add({severity:'warn', summary:'Service Message', detail:'Not send. Retry'});
      }
    },
    error =>{   
      console.log('er',error);
      this.spinner.hide()
      this.messageService.add({severity:'error', summary:'Opps!', detail:'Sothing went wrong!'});
    })
  }

  skipToDashboard(){ 
      let loginData = {
        user_email : this.sessionService.getItem('user_email'),
        user_pwd : this.sessionService.getItem('user_pwd')
      }
      console.log(loginData);
      this.auth.logIn(loginData)
  }

  public ngAfterViewInit() {
    this.stripeCheckoutLoader.createHandler({
        key: 'pk_test_F63TkaKKCwSbIPGbjcbzWuJT00PfCXqOJj',
        token: (token) => {
            // Do something with the token...
            console.log('Payment successful!', token);
        }
    }).then((handler: StripeCheckoutHandler) => {
        this.stripeCheckoutHandler = handler;
    });
}

public onBuyProduct(cdata) {
  this.stripeCheckoutHandler.open({
    amount: 1500000,
    currency: 'INR',
  }).then((token) => {
    // Do something with the token...
    console.log('Payment successful!', token);
    let payData:ProductPayment = {
        plan_type : 1,
        payment_amount : 15000,
        currency: 'INR',
        company_details_id: cdata,
        payment_details: token,
        expiry_date: '',
        status: 1
    }
    this.onRegisterPayment(payData)
  }).catch((err) => {
    // Payment failed or was canceled by user...
    if (err !== 'stripe_closed') {
        throw err;
    }
    
  //   let payData:ProductPayment = {
  //     plan_type : 1,
  //     payment_amount : 15000,
  //     currency: 'INR',
  //     company_details_id: cdata,
  //     payment_details: err,
  //     expiry_date: this.futureMonthEnd,
  //     status: 2
  // }
  // this.onRegisterPayment(payData)
});
}

public onClickCancel() {
  // If the window has been opened, this is how you can close it:
  this.stripeCheckoutHandler.close();
}

onCheckEmailExist(){
  this.messageService.clear();
  console.log('onCheckEmailExist',this.userForm.value.user_email);  
  console.log('valid',this.userForm.controls['user_email'].valid);
    if(this.userForm.controls['user_email'].invalid == true){      
      this.emailCheckStatus = null;
      return false
    }
  this.emailCheckStatus = null;
  this.auth.onCheckEmailExist(this.userForm.value.user_email)
  .subscribe((data:any)=>{  
    console.log('data',data);   
    if(data.length != 0){
      this.emailCheckStatus = 2;
      this.messageService.add({severity:'warn', summary:'Warning!', detail:'Email already exist!'});
      this.userForm.controls['user_email'].setErrors({ 'emailExist': true })
      this.userForm.controls['user_email'].markAsDirty();
    }else{
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

 
 showResponse(event) {
   console.log('event',event)
  // this.messageService.add({severity:'info', summary:'Succees', detail: 'User Responded', sticky: true});
}


 public checkValidityPlan(): void {
    Object.keys(this.planForm.controls).forEach((key) => {
      this.planForm.controls[key].markAsDirty();
    });
  }

  public checkValidityCompany(): void {
    Object.keys(this.companyForm.controls).forEach((key) => {
      this.companyForm.controls[key].markAsDirty();
    });
  }

  public checkValidityUser(): void {
    Object.keys(this.userForm.controls).forEach((key) => {
      this.userForm.controls[key].markAsDirty();
    });
  }
 

}
