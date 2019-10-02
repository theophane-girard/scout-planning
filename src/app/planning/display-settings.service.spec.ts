import { TestBed } from '@angular/core/testing';

import { DisplaySettingsService } from './display-settings.service';

describe('DisplaySettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplaySettingsService = TestBed.get(DisplaySettingsService);
    expect(service).toBeTruthy();
  });
});
