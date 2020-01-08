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
    return this.httpClient.get(environment.api_url + '/api/sales/total-purchase/'+this.sessionService.getItem('company_id'));
  }


}
