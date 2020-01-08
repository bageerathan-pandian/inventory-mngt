
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private httpClient:HttpClient,private sessionService: SessionService) { }

  getStock(){
    return this.httpClient.get(environment.api_url + '/api/stock');
  }
  

  getStockByCompany(){
    return this.httpClient.get(environment.api_url + '/api/stock/get-by-company/'+this.sessionService.getItem('company_id'));
  }

  
  getStockByCompanyActive(){
    return this.httpClient.get(environment.api_url + '/api/stock/get-by-company-active/'+this.sessionService.getItem('company_id'));
  }

  addStock(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(environment.api_url + '/api/stock',body,{headers:headerOption});
  }

  updateStock(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(environment.api_url + '/api/stock/'+ data._id ,body,{headers:headerOption});
  }

  deleteStock(id){
    return this.httpClient.delete(environment.api_url + '/api/stock/'+ id);
  }

  // updateUser(){
  //   return this.httpClient.put('/users')
  // }
}
