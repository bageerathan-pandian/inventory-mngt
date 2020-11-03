import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common'
@Pipe({
  name: 'negotiveToBrackets'
})
export class NegotiveToBracketsPipe implements PipeTransform {

  transform(value: number): any {
    console.log(value)
    if (value < 0) {      
      let currencyPipe = new CurrencyPipe('en');
      let formattedNumber = currencyPipe.transform(Math.abs(value), 'INR', 'symbol');
      return `( ${formattedNumber} )`;
    }
    let currencyPipe = new CurrencyPipe('en');
    let formattedNumber = currencyPipe.transform(value, 'INR', 'symbol');
    return formattedNumber;
  }

}
