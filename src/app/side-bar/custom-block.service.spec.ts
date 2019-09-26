import { TestBed } from '@angular/core/testing';

import { CustomBlockService } from './custom-block.service';

describe('CustomBlockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomBlockService = TestBed.get(CustomBlockService);
    expect(service).toBeTruthy();
  });
});
