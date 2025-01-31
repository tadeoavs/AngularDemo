import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tax',
  standalone: true
})
export class TaxPipe implements PipeTransform {

  transform(value: number): number {
    const tax = value + (value * 0.16);
    return tax;
  }

}
