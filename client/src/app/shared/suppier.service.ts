import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class SuppierService {

  constructor(private httpClient:HttpClient, private sessionService: SessionService) { }

  getSupplier(){
    return this.httpClient.get(environment.api_url + '/api/supplier');
  }

  getSupplierByCompany(){
    return this.httpClient.get(environment.api_url + '/api/supplier/get-by-company/'+this.sessionService.getItem('company_id'));
  }

  addSupplier(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(environment.api_url + '/api/supplier',body,{headers:headerOption});
  }

  updateSupplier(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(environment.api_url + '/api/supplier/'+ data._id ,body,{headers:headerOption});
  }

  deleteSupplier(id){
    return this.httpClient.delete(environment.api_url + '/api/supplier/'+ id);
  }

  // updateUser(){
  //   return this.httpClient.put('/users')
  // }
}
