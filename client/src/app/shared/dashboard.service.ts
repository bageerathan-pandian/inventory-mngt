import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  constructor(private httpClient:HttpClient, private sessionService : SessionService) { }

  
  getLoggedInUsers(){
    return this.httpClient.get(environment.api_url + '/api/dashboard/logged-in-users');
  }

  getLatestStocks(){
    return this.httpClient.get(environment.api_url + '/api/dashboard/latest-stock/'+this.sessionService.getItem('company_id'));
  }

  getLatestSales(){
    return this.httpClient.get(environment.api_url + '/api/dashboard/latest-sales/'+this.sessionService.getItem('company_id'));
  }

  getLatestPurchase(){
    return this.httpClient.get(environment.api_url + '/api/dashboard/latest-purchase/'+this.sessionService.getItem('company_id'));
  }
}
