import { TestBed } from '@angular/core/testing';

import { CoreFunctionService } from './core-function.service';

describe('CoreFunctionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoreFunctionService = TestBed.get(CoreFunctionService);
    expect(service).toBeTruthy();
  });

  it('should be "15min"', () => {
    const num: number = 0.25
    let hour: string = CoreFunctionService.time_convert(num)
    expect(hour === '15min');
  });
  it('should be "2h15min"', () => {
    const num: number = 2.25
    let hour: string = CoreFunctionService.time_convert(num)
    expect(hour === '2h15min');
  });
  it('should be "3h"', () => {
    const num: number = 3
    let hour: string = CoreFunctionService.time_convert(num)
    expect(hour === '3h');
  });
});
