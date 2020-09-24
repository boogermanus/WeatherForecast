import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { WeatherDataService } from './weather-data.service';

describe('WeatherDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: WeatherDataService = TestBed.get(WeatherDataService);
    expect(service).toBeTruthy();
  });
});
