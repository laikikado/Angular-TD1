import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'toDollars'})
export class ChangeCurrency implements PipeTransform {
  transform(
    value: number
  ): any {
    return value * 1.1;
  }
}
