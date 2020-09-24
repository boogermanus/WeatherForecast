import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { LocationApiService } from './location-api.service';

describe('LocationApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: LocationApiService = TestBed.get(LocationApiService);
    expect(service).toBeTruthy();
  });
});
