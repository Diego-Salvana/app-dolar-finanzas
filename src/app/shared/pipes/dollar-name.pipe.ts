import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'dollarName',
   standalone: true
})
export class DollarNamePipe implements PipeTransform {
   transform (value: string): string {
      switch (value) {
         case 'Contado con liquidación':
            return 'CCL';
         case 'Bolsa':
            return 'MEP';
         default:
            return value;
      }
   }
}
