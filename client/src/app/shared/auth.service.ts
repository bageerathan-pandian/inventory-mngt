import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { PushService } from './push.service';
import { NgxSpinnerService } from 'ngx-spinner';
import * as _ from 'lodash';
import { SessionService } from './session.service';

@Injectable({
  providedIn: "root"
})
export class AuthService {
    
  private socket;   

  constructor(private router: Router,private httpClient:HttpClient,private messageService:MessageService, private pushService: PushService,
    private spinner: NgxSpinnerService,
    public sessionService: SessionService
    ) {
    this.socket = io(environment.api_url);
  }

  apiURL(){
    return environment.api_url ? environment.api_url : ''
  }

  // isLogedIn() {
  //   return this.sessionService.getItem("inventryLogedIn") ? this.sessionService.getItem("inventryLogedIn") : null;
  // }

  // getUserCompanyId() {
  //   return  this.sessionService.getItem("company_id") ? this.sessionService.getItem("company_id") : null;
  // }
  
  // getUserData() {
  //    return  this.sessionService.getItem("user_details") ? JSON.parse(this.sessionService.getItem("user_details")) : null;
  //  }

  //  localStorageUserDataUpdate(updateKey,updatedValue){
  //   console.log('updateKey',updateKey,'updatedValue',updatedValue)
  //   let user_details =  JSON.parse(this.sessionService.getItem('user_details'));
  //   console.log('user_details',user_details)
  //   // user_details.key = updatedValue
  //   // this.sessionService.setItem('user_details',JSON.stringify(user_details));
  //   _.mapValues(user_details, (value, key) => {
  //     console.log(key,value)
  //     console.log(typeof(key),typeof(updateKey))
  //     if(key == updateKey){
  //      const upValue = _.replace(value, typeof(key), updatedValue)
  //      console.log('upValue',upValue)
  //       this.sessionService.setItem('user_details',JSON.stringify(upValue));
  //       return false
  //     }
  //   }) 
  //  }

  logIn(ldata) {
    this.spinner.show();
    var body = JSON.stringify(ldata);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    this.httpClient.post(environment.api_url + '/api/auth/login',body,{headers:headerOption})
    .subscribe((data:any)=>{
      console.log('data',data);
      this.messageService.clear();
      this.spinner.hide();
      if(data.user.status == 0){
        this.messageService.add({severity:'error', summary:'Opps!', detail:'Your account is deactivated by Company admin!'});
        return false;
      }
      if(data.user.status == 2){
        this.messageService.add({severity:'error', summary:'Opps!', detail:'Your account has been expired. Contact Ownwaysoft.com!'});
        return false;
      }
      if(data.token){
        // setTimeout(() => {
          this.socket.emit('loginTodo', data.user);

          this.sessionService.setItem("inventryLogedIn", "1");
          this.sessionService.setItem('secret_token',data.token);
          this.sessionService.setItem('rememberMe',  ldata.rememberMe);
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
      this.spinner.hide();
      this.messageService.add({severity:'error', summary:'Opps!', detail:'Sothing went wrong!'});
      // this.sessionService.setItem("inventryLogedIn", "1");
      // this.router.navigate(["/dashboard"]);
    })   
  }

  changePassword(data) {
    var body = JSON.stringify(data);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(environment.api_url + '/api/auth/change-password',body,{headers:headerOption})
  }

  forgotPassword(data) {
    var body = JSON.stringify(data);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(environment.api_url + '/api/auth/forgot-password',body,{headers:headerOption})
  }

  resetPassword(data) {
    var body = JSON.stringify(data);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(environment.api_url + '/api/auth/reset-password',body,{headers:headerOption})
  }

  
  resendVerifyEmail(data) {
    var body = JSON.stringify(data);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(environment.api_url + '/api/auth/resend-verify-email',body,{headers:headerOption})
  }

  
  verifiedEmail(data) {
    var body = JSON.stringify(data);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(environment.api_url + '/api/auth/verified-email',body,{headers:headerOption})
  }

  onRegisterCompany(data) {
    var body = JSON.stringify(data);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(environment.api_url + '/api/auth/register-company',body,{headers:headerOption})
  }

  onRegisterUser(data) {
    var body = JSON.stringify(data);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(environment.api_url + '/api/auth/register-user',body,{headers:headerOption})
  }

  onRegisterPlan(data) {
    var body = JSON.stringify(data);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(environment.api_url + '/api/auth/register-plan',body,{headers:headerOption})
  }

  onRegisterPayment(data) {
    var body = JSON.stringify(data);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(environment.api_url + '/api/auth/register-payment',body,{headers:headerOption})
  }

  onCheckEmailExist(data) {
    return this.httpClient.get(environment.api_url + '/api/auth/check-email-exist/'+data)
  }

  getPaymentDetails(id) {
    return this.httpClient.get(environment.api_url + '/api/auth/get-payment-details/'+id)
  }

  getCompanyCount(){
    return this.httpClient.get(environment.api_url + '/api/auth/company-count')
  }

  logOut() {
    this.spinner.show()
    var body = { _id : this.sessionService.getItem("_id")  }
    console.log('body',body)
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    this.httpClient.post(environment.api_url + '/api/auth/logout',body,{headers:headerOption})
    .subscribe((data:any)=>{      
    setTimeout(() => {  
      this.spinner.hide()     
      this.socket.emit('logoutTodo', data);    
      this.sessionService.clear();
      this.router.navigate(["/login"]);
       }, 2000);
    })
  }

  logInSocktet() {
    let observable = new Observable(observer => {
      this.socket = io(environment.api_url);
      this.socket.on('login', (data) => {
        this.pushService.doNotification((data.user_name).toUpperCase() + ' is Online!',data.company_details_id.company_name);
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  logOutSocktet() {
    let observable = new Observable(observer => {
      this.socket = io(environment.api_url);
      this.socket.on('logout', (data) => {
        this.pushService.doNotification((data.user_name).toUpperCase() + ' is Offline!',data.company_details_id.company_name);
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  sendContact(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(environment.api_url + '/api/auth/contact',body,{headers:headerOption});
  }



}
