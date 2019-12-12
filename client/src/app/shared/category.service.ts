
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  getCategory(){
    return this.httpClient.get('./api/category');
  }
  
  getCategoryByCompany(id){
    return this.httpClient.get('./api/category/get-by-company/'+id);
  }

  addCategory(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post('./api/category',body,{headers:headerOption});
  }

  updateCategory(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put('./api/category/'+ data._id ,body,{headers:headerOption});
  }

  deleteCategory(id){
    return this.httpClient.delete('./api/category/'+ id);
  }

  updateStatus(status,id){
    var body = JSON.stringify(status);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put('./api/category/status-update/'+ id ,body,{headers:headerOption});
  }
}
