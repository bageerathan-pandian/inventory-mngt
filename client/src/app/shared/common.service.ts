import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

   
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
