import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameCompany',
})
export class NameCompany implements PipeTransform {
  transform(value: string) {
    return 'name(' + value + ')';
  }
}
