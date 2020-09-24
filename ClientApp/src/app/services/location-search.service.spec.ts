import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { LocationSearchService } from './location-search.service';

describe('LocationSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: LocationSearchService = TestBed.get(LocationSearchService);
    expect(service).toBeTruthy();
  });
});
