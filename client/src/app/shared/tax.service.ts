import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class TaxService {
  constructor(private httpClient:HttpClient, private sessionService: SessionService) { }

  getTax(){
    return this.httpClient.get(environment.api_url + '/api/tax');
  }
  
  getTaxByCompany(){
    return this.httpClient.get(environment.api_url + '/api/tax/get-by-company/'+this.sessionService.getItem('company_id'));
  }

  addTax(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(environment.api_url + '/api/tax',body,{headers:headerOption});
  }

  updateTax(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(environment.api_url + '/api/tax/'+ data._id ,body,{headers:headerOption});
  }

  deleteTax(id){
    return this.httpClient.delete(environment.api_url + '/api/tax/'+ id);
  }

  updateStatus(status,id){
    var body = JSON.stringify(status);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(environment.api_url + '/api/tax/status-update/'+ id ,body,{headers:headerOption});
  }
}
