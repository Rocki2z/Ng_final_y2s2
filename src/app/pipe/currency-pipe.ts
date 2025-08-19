import { Pipe, PipeTransform, Input } from '@angular/core';

@Pipe({
  name: 'khcurrency'
})

export class khCurrencyPipe implements PipeTransform {
  @Input() products: any = [];
  transform( price : number ): string {
   
    let res: number = price * 4100;
    let tail = res % 100;

    if (tail >= 50) {
      res = res + (100 - tail);

    } else {
      res = res - tail;
    }
    let format: string = res.toLocaleString();
    return `${format} ៛`
    
  }
}







