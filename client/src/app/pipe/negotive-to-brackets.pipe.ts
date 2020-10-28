import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'negotiveToBrackets'
})
export class NegotiveToBracketsPipe implements PipeTransform {

  transform(value: number): any {
    console.log(value)
    if (value < 0) {
      return `( ${Math.abs(value).toFixed(2)} )`;
    }
    return value.toFixed(2);
  }

}
