import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreFunctionService {

  constructor() { }

  static time_convert(num): string {
    let result: string = ""
    let hours = Math.floor(num);
    let minutes = (num - Math.floor(num)) * 60;
    if (hours > 0) {
      result += hours + 'h'
    }
    if (minutes > 0) {
      result += minutes + 'min'
    }
    return result
  }
}
