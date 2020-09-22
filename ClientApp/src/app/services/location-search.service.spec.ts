import { TestBed } from '@angular/core/testing';

import { LocationSearchService } from './location-search.service';

describe('LocationSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocationSearchService = TestBed.get(LocationSearchService);
    expect(service).toBeTruthy();
  });
});
