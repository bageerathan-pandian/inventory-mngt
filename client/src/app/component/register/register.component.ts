import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthLoginService } from 'src/app/shared/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import {StripeCheckoutLoader, StripeCheckoutHandler} from 'ng-stripe-checkout';
import { ProductPayment } from 'src/app/model/product_payment.model';
import * as moment from 'moment';
import { CommonService } from 'src/app/shared/common.service';
import { environment } from 'src/environments/environment';
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
  loaingSpinner: boolean
  emailVerify: boolean = true;
  phoneVerify: boolean = false;
  items:any  
  activeIndex: number = 0;
  planForm:FormGroup
  companyForm:FormGroup
  userForm:FormGroup
  paymentForm:FormGroup 
  resendVerifyForm: FormGroup
  sendOTPForm: FormGroup
  verifyOTPForm: FormGroup
  futureMonthEnd = moment().add(1, 'M');
  emailCheckStatus : any
  private socket;
  site_key:string
  params:any = {}
  
  constructor(private messageService: MessageService, private _fb: FormBuilder,private auth: AuthLoginService, private router:Router,
    private stripeCheckoutLoader: StripeCheckoutLoader, private commonService: CommonService,
    public sessionService: SessionService, private activedRoute: ActivatedRoute
    ) {
      // this.socket = io(environment.api_url);
      this.site_key = environment.site_key;

      this.activedRoute.queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        console.log(params)
        this.params = params
      });

      this.planForm = this._fb.group({
        plan_type: ['',Validators.required]
      })

      this.companyForm = this._fb.group({
        _id: [''],
        company_code: [''],
        company_name: ['',Validators.required],
        owner_name: ['',Validators.required],
        company_address: ['',Validators.required],
        country_code: ['in',Validators.required],
        country_dialCode: [91,Validators.required],
        phone: ['',Validators.required],
        gstin: [''],
        product_payment_details_id: [''],
        status: [1]
      })

    this.userForm = this._fb.group({
      _id: [''],
      user_code: ['u-0001',Validators.required],
      user_name: [this.params ? this.params.name: '',Validators.required],
      user_email:  [this.params ? this.params.email: '',[Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
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
    
    this.sendOTPForm = this._fb.group({
      _id: [this.sessionService.getItem('_id')],
      user_name: [this.sessionService.getItem('user_name'),Validators.required],
      phone:  ['',Validators.required],
    })

    this.verifyOTPForm = this._fb.group({
      _id: [this.sessionService.getItem('_id')],
      user_name: [this.sessionService.getItem('user_name'),Validators.required],
      otp:  ['',Validators.required],
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
      console.log('cm',this.companyForm.value);
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
    this.onRegisterUser() 
    
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
    
    this.loaingSpinner = false;
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
    
    this.loaingSpinner = false;
  })
}

onCheckPaymentType(){
  if (this.planForm.value.plan_type == 1) {
    this.onBuyProduct();
    return false;
  }else{
    let payData:ProductPayment = {
      plan_type : 0,
      payment_amount : 14999,
      currency: 'INR',
      // company_details_id: data,
      payment_details: '',
      expiry_date: this.futureMonthEnd,
      status: 0
  }
  this.onRegisterPayment(payData)
  }
}

 onRegisterPayment(cdata){
  this.messageService.clear();
  this.auth.onRegisterPayment(cdata)
  .subscribe((data:any)=>{  
    console.log('onRegisterPayment data',data);       
    this.companyForm.controls['product_payment_details_id'].setValue(data._id);  
    // this.onRegisterUser();
    this.onRegisterCompany()
  },
  error =>{   
    console.log('er',error);
    this.messageService.add({severity:'error', summary:'Opps!', detail:'Sothing went wrong!'});
  })
 }

  onRegister(){
    console.log(this.companyForm);
    console.log(this.userForm);
    
    this.loaingSpinner = true;
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

    this.onCheckPaymentType()
    
  }

  resendVerifyEmail(){  
    this.resendVerifyForm.controls['_id'].setValue(this.sessionService.getItem('_id') ? this.sessionService.getItem('_id') : this.userForm.value._id)
    this.resendVerifyForm.controls['user_name'].setValue(this.sessionService.getItem('user_name') ? this.sessionService.getItem('user_name') : this.userForm.value.user_name)
    this.resendVerifyForm.controls['user_email'].setValue(this.resendVerifyForm.value.user_email ? this.resendVerifyForm.value.user_email : this.userForm.value.user_email)
    console.log('sendVerifyEmail',this.resendVerifyForm) 
    if(this.resendVerifyForm.invalid){
      return;
    } 
    this.loaingSpinner = true
    this.auth.resendVerifyEmail(this.resendVerifyForm.value)
    .subscribe((data:any)=>{  
      console.log('data',data); 
      this.loaingSpinner = false
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
      this.loaingSpinner = false
      this.messageService.add({severity:'error', summary:'Opps!', detail:'Sothing went wrong!'});
    })
  }

  skipToDashboard(){ 
      let loginData = {
        user_email : this.sessionService.getItem('user_email'),
        user_pwd : this.sessionService.getItem('user_pwd'),
        rememberMe : false
      }
      console.log(loginData);
      this.auth.logIn(loginData)
      .subscribe((data:any)=>{
        console.log('data',data);
        this.messageService.clear();
        this.loaingSpinner = false
        if(data.token){
          // setTimeout(() => {
            // this.socket.emit('loginTodo', data.user);
  
            this.sessionService.setItem("inventryLogedIn", "1");
            this.sessionService.setItem('secret_token',data.token);
            this.sessionService.setItem('rememberMe',  false);
            this.sessionService.setUserCredentials(data.user)
            // if(this.loginForm.value.rememberMe == true){
            //   this.sessionService.setItem('user_email', this.loginForm.value.user_email);
            //   this.sessionService.setItem('user_pwd',  this.loginForm.value.user_pwd);
            //   this.sessionService.setItem('rememberMe',  this.loginForm.value.rememberMe);
            //   this.sessionService.setItem('secret_token', data.token);
            // }else{
            //   this.sessionService.clear()
            // }
            this.router.navigate(["/inventory-mngt/dashboard"]);
            this.messageService.add({severity:'success', summary:'Success!', detail:'Login success!'});
          //  }, 1000);
          
        }else{
          this.messageService.clear();
          this.messageService.add({severity:'warn', summary:'Warning!', detail:'Check your User Name/Password'});
        }
      
      },
      error =>{
        console.log('er',error);
        this.loaingSpinner = false
        this.messageService.add({severity:'error', summary:'Opps!', detail:'Sothing went wrong!'});
        // this.sessionService.setItem("inventryLogedIn", "1");
        // this.router.navigate(["/dashboard"]);
      })
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

public onBuyProduct() {
  this.stripeCheckoutHandler.open({
    amount: 1499900,
    currency: 'INR',
  }).then((token) => {
    // Do something with the token...
    console.log('Payment successful!', token);
    let payData:ProductPayment = {
        plan_type : 1,
        payment_amount : 14999,
        currency: 'INR',
        // company_details_id: cdata,
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
  //     payment_amount : 14999,
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
   console.log('event',event.response)
  // this.messageService.add({severity:'info', summary:'Succees', detail: 'User Responded', sticky: true});
}

telInputObject(obj) {
  console.log(obj);
  console.log(obj.s.dialCode);
  obj.setCountry('in');
}

getNumber(evnt){
  console.log('evnt',evnt);
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

  changePhoneVerify(e,p){
    this.emailVerify = (e == 1) ? true : false;
    this.phoneVerify = (p == 1) ? true : false;
  }

  onCountryChange(event) {
    console.log(event);  
    this.companyForm.get('country_code').setValue(event.iso2)
    this.companyForm.get('country_dialCode').setValue(event.dialCode)
    // console.log(obj.s.dialCode);
    // obj.setCountry('in');
  }
 

}
