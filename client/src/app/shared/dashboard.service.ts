import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  constructor(private httpClient:HttpClient) { }

  
  getLoggedInUsers(){
    return this.httpClient.get('/api/dashboard/logged-in-users');
  }

  getLatestStocks(id){
    return this.httpClient.get('/api/dashboard/latest-stock/'+id);
  }

  getLatestSales(id){
    return this.httpClient.get('/api/dashboard/latest-sales/'+id);
  }

  getLatestPurchase(id){
    return this.httpClient.get('/api/dashboard/latest-purchase/'+id);
  }
}
