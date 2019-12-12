import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient: HttpClient) { }

   
  leftPad(type,number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return type +'-'+ output;
}

  incrCode(type,count){
    let cCode = Number(count) + 1
    console.log('cCode',cCode);
    return this.leftPad(type,cCode, 4) ;
  }

  sendContact(data){
    var body = JSON.stringify(data);
    console.log('body',body);
    var headerOption = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post('./api/common/contact',body,{headers:headerOption});
  }
}
