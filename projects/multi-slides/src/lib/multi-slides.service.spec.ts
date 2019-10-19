import { TestBed } from '@angular/core/testing';

import { MultiSlidesService } from './multi-slides.service';

describe('MultiSlidesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultiSlidesService = TestBed.get(MultiSlidesService);
    expect(service).toBeTruthy();
  });
});
