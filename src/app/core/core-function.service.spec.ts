import { TestBed } from '@angular/core/testing';

import { CoreFunctionService } from './core-function.service';

describe('CoreFunctionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoreFunctionService = TestBed.get(CoreFunctionService);
    expect(service).toBeTruthy();
  });

  it('should be "05min"', () => {
    const num: number = 0.08
    let hour: string = CoreFunctionService.numberToTime(num)
    expect(hour).toEqual('05min');
  });
  it('should be "15min"', () => {
    const num: number = 0.25
    let hour: string = CoreFunctionService.numberToTime(num)
    expect(hour).toEqual('15min');
  });
  it('should be "2h15min"', () => {
    const num: number = 2.25
    let hour: string = CoreFunctionService.numberToTime(num)
    expect(hour).toEqual('2h15min');
  });
  it('should be "3h"', () => {
    const num: number = 3
    let hour: string = CoreFunctionService.numberToTime(num)
    expect(hour).toEqual('3h');
  });
  it('should be "0h"', () => {
    const num: number = 0
    let hour: string = CoreFunctionService.numberToTime(num)
    expect(hour).toEqual('0h');
  });
  it('should be "3h05min"', () => {
    const num: number = 3.08
    let hour: string = CoreFunctionService.numberToTime(num)
    expect(hour).toEqual('3h05min');
  });
  it('should be "13h05"', () => {
    const num: number = 13.08
    let hour: string = CoreFunctionService.numberToTime(num)
    expect(hour).toEqual('13h05min');
  });
  it('should be "13h30"', () => {
    const num: number = 13.5
    let hour: string = CoreFunctionService.numberToTime(num)
    expect(hour).toEqual('13h30min');
  });
  
  //timeToNumberString

  it('should be "00:05"', () => {
    const num: number = 0.08
    let hour: string = CoreFunctionService.numberToTimeString(num)
    expect(hour).toEqual('00:05');
  });
  it('should be "00:15"', () => {
    const num: number = 0.25
    let hour: string = CoreFunctionService.numberToTimeString(num)
    expect(hour).toEqual('00:15');
  });
  it('should be "02:15"', () => {
    const num: number = 2.25
    let hour: string = CoreFunctionService.numberToTimeString(num)
    expect(hour).toEqual('02:15');
  });
  it('should be "03:00"', () => {
    const num: number = 3
    let hour: string = CoreFunctionService.numberToTimeString(num)
    expect(hour).toEqual('03:00');
  });
  it('should be "00:00"', () => {
    const num: number = 0
    let hour: string = CoreFunctionService.numberToTimeString(num)
    expect(hour).toEqual('00:00');
  });
  it('should be "03:05"', () => {
    const num: number = 3.08
    let hour: string = CoreFunctionService.numberToTimeString(num)
    expect(hour).toEqual('03:05');
  });
  it('should be "13:05"', () => {
    const num: number = 13.08
    let hour: string = CoreFunctionService.numberToTimeString(num)
    expect(hour).toEqual('13:05');
  });
  it('should be "13:30"', () => {
    const num: number = 13.5
    let hour: string = CoreFunctionService.numberToTimeString(num)
    expect(hour).toEqual('13:30');
  });

  //timeToNumber

  it('should be "13.5"', () => {
    const time: string = '13:30 PM'
    let hour: number = CoreFunctionService.timeToNumber(time)
    expect(hour).toEqual(13.5);
  });
  it('should be "13.083"', () => {
    const time: string = '13:05 PM'
    let hour: number = CoreFunctionService.timeToNumber(time)
    expect(hour).toEqual(13.083);
  });  
  it('should be "9.5"', () => {
    const time: string = '9:30 AM'
    let hour: number = CoreFunctionService.timeToNumber(time)
    expect(hour).toEqual(9.5);
  });
  it('should be "14.1"', () => {
    const time: string = '14:06 AM'
    let hour: number = CoreFunctionService.timeToNumber(time)
    expect(hour).toEqual(14.1);
  });
});
