import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreFunctionService {

  constructor() { }

  /**
   * convert a number to hour/min (2 => 2h; 0.25 => 25min)
   * @param num numlber to convert
   */
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

  static getDragOrigin(container) {

  }
}
