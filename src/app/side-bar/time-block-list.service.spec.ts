import { TestBed } from '@angular/core/testing';

import { TimeBlockListService } from './time-block-list.service';

describe('TimeBlockListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeBlockListService = TestBed.get(TimeBlockListService);
    expect(service).toBeTruthy();
  });
});
