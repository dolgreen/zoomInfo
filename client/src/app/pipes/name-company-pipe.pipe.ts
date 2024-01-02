import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameCompany',
  standalone: true,
})
export class NameCompanyPipe implements PipeTransform {
  transform(value: string) {
    return 'name(' + value + ')';
  }
}
