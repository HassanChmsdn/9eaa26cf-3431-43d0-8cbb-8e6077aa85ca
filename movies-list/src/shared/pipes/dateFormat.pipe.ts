import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(inputDate: string): string {
    if (!inputDate) {
      return '';
    }

    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    };

    const date = new Date(inputDate);

    const weekday = date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
    const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
    const day = date.toLocaleDateString('en-US', { day: 'numeric' });
    const year = date.toLocaleDateString('en-US', { year: 'numeric' });

    return `${weekday} ${month} ${day} ${year}`;
  }
}