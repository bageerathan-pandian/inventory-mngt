import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaxService {
  constructor(private httpClient:HttpClient) { }

  getTax(){
    return this.httpClient.get('/api/tax');
  }
  
  getTaxByCompany(id){
    return this.httpClient.get('/api/tax/get-by-company/'+id);
  }

  addTax(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post('/api/tax',body,{headers:headerOption});
  }

  updateTax(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put('/api/tax/'+ data._id ,body,{headers:headerOption});
  }

  deleteTax(id){
    return this.httpClient.delete('/api/tax/'+ id);
  }

  updateStatus(status,id){
    var body = JSON.stringify(status);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put('/api/tax/status-update/'+ id ,body,{headers:headerOption});
  }
}
