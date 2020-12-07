import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService {


  constructor(private httpClient:HttpClient, private sessionService: SessionService) { }

  getBrand(){
    return this.httpClient.get(environment.api_url + '/api/brand');
  }
  
  getBrandByCompany(){
    return this.httpClient.get(environment.api_url + '/api/brand/get-by-company/'+this.sessionService.getItem('company_id'));
  }

  addBrand(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(environment.api_url + '/api/brand',body,{headers:headerOption});
  }

  updateBrand(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(environment.api_url + '/api/brand/'+ data._id ,body,{headers:headerOption});
  }

  deleteBrand(id){
    return this.httpClient.delete(environment.api_url + '/api/brand/'+ id);
  }

  updateStatus(status,id){
    var body = JSON.stringify(status);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(environment.api_url + '/api/brand/status-update/'+ id ,body,{headers:headerOption});
  }
}
