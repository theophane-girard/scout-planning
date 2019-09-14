import { TestBed } from '@angular/core/testing';

import { CoreFunctionService } from './core-function.service';

describe('CoreFunctionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoreFunctionService = TestBed.get(CoreFunctionService);
    expect(service).toBeTruthy();
  });
});
