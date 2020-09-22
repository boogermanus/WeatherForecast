import { Injectable } from '@angular/core';
import { resolve } from 'dns';
import { LocationApiService } from './location-api.service';

@Injectable({
  providedIn: 'root'
})
export class LocationSearchService {

  constructor(private locationApiService: LocationApiService) { }

  public async searchAddress(address: string): Promise<any> {
    const data = await this.locationApiService.get(address);
    const matches = data.result.addressMatches;
    if (matches.length === 0) {
      return Promise.resolve(null);
    }

    return Promise.resolve(matches[0]);
  }

  public searchLatitudeLongitude(latitude: number, longitude: number): void {
  }
}
