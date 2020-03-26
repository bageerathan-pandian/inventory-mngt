import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {


  constructor(private httpClient:HttpClient) { }

  getCompany(){
    return this.httpClient.get(environment.api_url + '/api/company');
  }

  getCompanyAdminUsers(){
    return this.httpClient.get(environment.api_url + '/api/company/admin-users');
  }

  
  getAllCompanies(){
    return this.httpClient.get(environment.api_url + '/api/company/get-all-companies');
  }

  getCompanyByGroup(){
    return this.httpClient.get(environment.api_url + '/api/company/groupByCompany');
  }

  addCompany(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(environment.api_url + '/api/company',body,{headers:headerOption});
  }

  updateCompany(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(environment.api_url + '/api/company/'+ data._id ,body,{headers:headerOption});
  }

  deleteCompany(id){
    return this.httpClient.delete(environment.api_url + '/api/company/'+ id);
  }

  // updateUser(){
  //   return this.httpClient.put('/users')
  // }
}
