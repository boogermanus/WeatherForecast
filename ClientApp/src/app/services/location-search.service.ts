import { Injectable } from '@angular/core';
import { IPoint } from '../interfaces/ipoint';
import { LocationApiService } from './location-api.service';
import { WeatherDataService } from './weather-data.service';

@Injectable({
  providedIn: 'root'
})
export class LocationSearchService {

  constructor(private locationApiService: LocationApiService,
              private weatherDataService: WeatherDataService) { }

  public async searchAddress(address: string): Promise<IPoint> {
    const data = await this.locationApiService.get(address);
    const matches = data.result.addressMatches;
    const firstMatch = matches[0];
    return this.weatherDataService.getPoints(firstMatch.coordinates.y, firstMatch.coordinates.x);

  }

  public searchLatitudeLongitude(latitude: number, longitude: number): Promise<IPoint> {
    return this.weatherDataService.getPoints(latitude.toString(), longitude.toString());
  }
}
