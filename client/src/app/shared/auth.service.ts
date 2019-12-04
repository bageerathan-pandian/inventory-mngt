import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { PushService } from './push.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Injectable({
  providedIn: "root"
})
export class AuthService {
    
  private socket;   

  constructor(private router: Router,private httpClient:HttpClient,private messageService:MessageService, private pushService: PushService,
    private spinner: NgxSpinnerService
    ) {
    this.socket = io(environment.api_url);
  }


  isLogedIn() {
    return localStorage.getItem("inventryLogedIn") ? localStorage.getItem("inventryLogedIn") : null;
  }

  getUserCompanyId() {
    return  localStorage.getItem("client_company_id") ? localStorage.getItem("client_company_id") : null;
  }
  
  getUserData() {
     return  localStorage.getItem("user_details") ? JSON.parse(localStorage.getItem("user_details")) : null;
   }

  logIn(data) {
    var body = JSON.stringify(data);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(environment.api_url + '/api/auth/login',body,{headers:headerOption})
    
    
  }

  changePassword(data) {
    var body = JSON.stringify(data);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(environment.api_url + '/api/auth/change-password',body,{headers:headerOption})
  }

  sendResetPassword(data) {
    var body = JSON.stringify(data);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(environment.api_url + '/api/auth/reset-password',body,{headers:headerOption})
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
    var body = JSON.stringify(JSON.parse(localStorage.getItem("user_details")));
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    this.httpClient.post(environment.api_url + '/api/auth/logout',body,{headers:headerOption})
    .subscribe((data:any)=>{      
    setTimeout(() => {  
      this.spinner.hide()     
      this.socket.emit('logoutTodo', data);    
      localStorage.clear();
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

}
