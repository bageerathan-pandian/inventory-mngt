
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  getCustomer(){
    return this.httpClient.get(environment.api_url + '/api/customer');
  }

  getCustomerByCompany(id){
    return this.httpClient.get(environment.api_url + '/api/customer/get-by-company/'+id);
  }

  addCustomer(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(environment.api_url + '/api/customer',body,{headers:headerOption});
  }

  updateCustomer(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(environment.api_url + '/api/customer/'+ data._id ,body,{headers:headerOption});
  }

  deleteCustomer(id){
    return this.httpClient.delete(environment.api_url + '/api/customer/'+ id);
  }

  // updateUser(){
  //   return this.httpClient.put('/users')
  // }
}
