import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  transform(text: string, search: string): string {
    return search ? text.replace(new RegExp(search, 'gi'), `<strong>${search}</strong>`) : text;
  }
}
