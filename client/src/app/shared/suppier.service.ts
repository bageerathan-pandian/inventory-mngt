import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuppierService {

  constructor(private httpClient:HttpClient) { }

  getSupplier(){
    return this.httpClient.get('/api/supplier');
  }

  getSupplierByCompany(id){
    return this.httpClient.get('/api/supplier/get-by-company/'+id);
  }

  addSupplier(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post('/api/supplier',body,{headers:headerOption});
  }

  updateSupplier(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put('/api/supplier/'+ data._id ,body,{headers:headerOption});
  }

  deleteSupplier(id){
    return this.httpClient.delete('/api/supplier/'+ id);
  }

  // updateUser(){
  //   return this.httpClient.put('/users')
  // }
}
