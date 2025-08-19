import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(res: number ): string {
    let amount:number =  res + 100
    let tokhr : string = amount.toLocaleString();
    return tokhr;
  }

}
