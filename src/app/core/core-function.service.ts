import { Injectable } from '@angular/core';
import { LANG } from './lang';

@Injectable({
  providedIn: 'root'
})
export class CoreFunctionService {

  readonly LANG = LANG
  constructor() { }

  /**
   * convert a number to hour/min (2 => 2h; 0.25 => 15min)
   * @param num numlber to convert
   */
  static numberToTime(num): string {
    let result: string = ""
    let hours = Math.floor(num);
    let minutes = Math.round(((num - Math.floor(num)) * 60))
    if (hours > 0) {
      result += hours + LANG.GENERAL.HOUR_SHORT
    }
    if (minutes > 0) {
        if (minutes < 10) {
            result += 0
        }
      result += minutes + LANG.GENERAL.MIN_SHORT
    }
    if (result === "") {
      result = 0 + LANG.GENERAL.HOUR_SHORT
    }
    return result
  }

  /**
   * convert a time to number (12:30 AM => 12.5; 14:00 => 14.00))
   * @param num numlber to convert
   */
  static timeToNumber(str: string) : number {
    let result: number = 0
    str = str.split(' ')[0]
    if (str) {
      result = +str.split(':')[0] + Math.round(+str.split(':')[1]*1000/60)/1000
    }
    return result
  }

  static numberToTimeString(num) : string {
    let result: string = ""
    let hours = Math.floor(num);
    let minutes = Math.round(((num - Math.floor(num)) * 60))
    if (hours > 0) {
      if (hours < 10) {
        result += 0
      }
      result += hours + ':'
    } else {
      result += '00:'
    }
    if (minutes > 0) {
        if (minutes < 10) {
          result += 0
        }
      result += minutes
    } else {
      result += '00'
    }
    if (result === "") {
      result = '00:00'
    }
    return result
  }
}
