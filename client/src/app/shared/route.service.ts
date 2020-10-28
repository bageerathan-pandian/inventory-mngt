import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private httpClient:HttpClient, private sessionService: SessionService) { }

  getRoute(){
    return this.httpClient.get(environment.api_url + '/api/route');
  }
  
  getRouteByCompany(){
    return this.httpClient.get(environment.api_url + '/api/route/get-by-company/'+this.sessionService.getItem('company_id'));
  }

  addRoute(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(environment.api_url + '/api/route',body,{headers:headerOption});
  }

  updateRoute(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(environment.api_url + '/api/route/'+ data._id ,body,{headers:headerOption});
  }

  deleteRoute(id){
    return this.httpClient.delete(environment.api_url + '/api/route/'+ id);
  }

  updateStatus(status,id){
    var body = JSON.stringify(status);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(environment.api_url + '/api/route/status-update/'+ id ,body,{headers:headerOption});
  }
}

