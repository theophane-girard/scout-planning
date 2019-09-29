import { Injectable } from '@angular/core';
import { LANG } from './lang';

@Injectable({
  providedIn: 'root'
})
export class CoreFunctionService {

  readonly LANG = LANG
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
      result += hours + LANG.GENERAL.HOUR_SHORT
    }
    if (minutes > 0) {
      result += minutes + LANG.GENERAL.MIN_SHORT
    }
    return result
  }

  static getDragOrigin(container) {

  }
}
