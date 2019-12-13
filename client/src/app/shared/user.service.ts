import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private socket; 
  constructor(private httpClient:HttpClient) { 
    this.socket = io(environment.api_url);
  }

  getUsers(){
    return this.httpClient.get(environment.api_url + '/api/users');
  }

  getUser(id){
    return this.httpClient.get(environment.api_url + '/api/users/'+id);
  }
  
  getUsersByCompany(id){
    return this.httpClient.get(environment.api_url + '/api/users/get-by-company/'+id);
  }

  addUser(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(environment.api_url + '/api/users',body,{headers:headerOption});
  }

  updateUser(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(environment.api_url + '/api/users/'+ data._id ,body,{headers:headerOption});
  }

  deleteUser(id){
    return this.httpClient.delete(environment.api_url + '/api/users/'+ id);
  }

  // updateUser(){
  //   return this.httpClient.put('/users')
  // }

  onCheckEmailExist(data) {
    return this.httpClient.get(environment.api_url + '/api/users/check-email-exist/'+data)
  }

  public addUserSocktet() {
    let observable = new Observable(observer => {
      this.socket = io(environment.api_url);
      this.socket.on('add', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  public deleteUserSocktet() {
    let observable = new Observable(observer => {
      this.socket = io(environment.api_url);
      this.socket.on('delete', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  public updateUserSocktet() {
    let observable = new Observable(observer => {
      this.socket = io(environment.api_url);
      this.socket.on('update', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  public statusUpdateUserSocktet() {
    let observable = new Observable(observer => {
      this.socket = io(environment.api_url);
      this.socket.on('status', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

}
