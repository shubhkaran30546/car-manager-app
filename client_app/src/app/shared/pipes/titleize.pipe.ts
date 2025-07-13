import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleize',
  standalone: true,
})
export class TitleizePipe implements PipeTransform {
  transform(value: string): string {
    return value
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
