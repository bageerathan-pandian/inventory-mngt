import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private httpClient:HttpClient) { }

  getLastInvoice(){
    return this.httpClient.get('/api/sales/last-invoice');
  }

  getTotalSalesAmount(){
    return this.httpClient.get('/api/sales/total-sales');
  }

  addSales(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post('/api/sales',body,{headers:headerOption});
  }

}
