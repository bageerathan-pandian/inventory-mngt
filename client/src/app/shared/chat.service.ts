import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  chatUrl = "https://api.dialogflow.com/v1/query";
  accessToken ="0061f705d47142c5ada1a37e9bcf05ef";
  constructor(private httpClient:HttpClient) { }

  public sendMessage(msg){
    let data = {
      lang:'en',
      sessionId:"12345",
      query:msg
    }
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.chatUrl,body,{headers:headerOption});
  }

}
