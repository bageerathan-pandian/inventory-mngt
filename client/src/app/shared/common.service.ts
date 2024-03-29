import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

  


}
