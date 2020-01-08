
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient, private sessionService: SessionService) { }

  getCategory(){
    return this.httpClient.get(environment.api_url + '/api/category');
  }
  
  getCategoryByCompany(){
    return this.httpClient.get(environment.api_url + '/api/category/get-by-company/'+this.sessionService.getItem('company_id'));
  }

  addCategory(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(environment.api_url + '/api/category',body,{headers:headerOption});
  }

  updateCategory(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(environment.api_url + '/api/category/'+ data._id ,body,{headers:headerOption});
  }

  deleteCategory(id){
    return this.httpClient.delete(environment.api_url + '/api/category/'+ id);
  }

  updateStatus(status,id){
    var body = JSON.stringify(status);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(environment.api_url + '/api/category/status-update/'+ id ,body,{headers:headerOption});
  }
}
