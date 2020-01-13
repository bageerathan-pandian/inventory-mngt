import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private httpClient:HttpClient, private sessionService : SessionService) { }

  getLastInvoice(){
    return this.httpClient.get(environment.api_url + '/api/sales/last-invoice/'+ this.sessionService.getItem('company_id'));
  }


  addSales(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(environment.api_url + '/api/sales',body,{headers:headerOption});
  }

}
