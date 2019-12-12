import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  constructor(private httpClient:HttpClient) { }

  getUnit(){
    return this.httpClient.get('./api/unit');
  }
  
  getUnitByCompany(id){
    return this.httpClient.get('./api/unit/get-by-company/'+id);
  }

  addUnit(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post('./api/unit',body,{headers:headerOption});
  }

  updateUnit(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put('./api/unit/'+ data._id ,body,{headers:headerOption});
  }

  deleteUnit(id){
    return this.httpClient.delete('./api/unit/'+ id);
  }

  updateStatus(status,id){
    var body = JSON.stringify(status);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put('./api/unit/status-update/'+ id ,body,{headers:headerOption});
  }
}
