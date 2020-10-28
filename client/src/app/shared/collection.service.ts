import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private httpClient:HttpClient,private sessionService: SessionService) { }

  

  getCustomerCollectionByCompany(){
    return this.httpClient.get(environment.api_url + '/api/invoice/get-by-company-customer-collection/'+this.sessionService.getItem('company_id'));
  }

  getSupplierCollectionByCompany(){
    return this.httpClient.get(environment.api_url + '/api/invoice/get-by-company-supplier-collection/'+this.sessionService.getItem('company_id'));
  }

  getTotalCustomerCollectionByCompany(){
    return this.httpClient.get(environment.api_url + '/api/collection/customer/get-by-company/'+this.sessionService.getItem('company_id'));
  }

  getTotalCustomerCollectionById(id){
    return this.httpClient.get(environment.api_url + '/api/collection/customer/get-by-company-and-customer-id/'+this.sessionService.getItem('company_id') + '/' + id);
  }

  
  addCustomerCollection(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(environment.api_url + '/api/collection/customer',body,{headers:headerOption});
  }

  updateCustomerCollection(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(environment.api_url + '/api/collection/customer'+ data._id ,body,{headers:headerOption});
  }

  deleteCustomerCollection(id){
    return this.httpClient.delete(environment.api_url + '/api/collection/customer/'+ id);
  }


}

