import { Injectable } from '@angular/core';
import { LocationApiService } from './location-api.service';

@Injectable({
  providedIn: 'root'
})
export class LocationSearchService {

  constructor(private locationApiService: LocationApiService) { }

  public searchAddress(address: string): Promise<any> {
    return this.locationApiService.get(address);
  }

  public searchLatitudeLongitude(latitude: number, longitude: number): void {
  }
}
