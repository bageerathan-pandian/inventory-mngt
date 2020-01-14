import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionService } from './session.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private httpClient:HttpClient, private sessionService : SessionService) { }

  

  getTotalPurchaseAmount(){
    return this.httpClient.get(environment.api_url + '/api/purchase/total-purchase/'+this.sessionService.getItem('company_id'));
  }

  
  getLastInvoice(){
    return this.httpClient.get(environment.api_url + '/api/purchase/last-invoice/'+ this.sessionService.getItem('company_id'));
  }


  addPurchase(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(environment.api_url + '/api/purchase',body,{headers:headerOption});
  }


}
