import { Injectable } from '@angular/core';
import { IPoint } from '../interfaces/ipoint';
import { WeatherApiService } from './weather-api.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  private POINTS_URL = 'points';
  constructor(private weatherApiService: WeatherApiService) { }

  public async getPoints(latitude: string, longitude: string): Promise<IPoint> {
    const data = await this.weatherApiService.get(`${this.POINTS_URL}/${latitude},${longitude}`);

    return Promise.resolve<IPoint>({
      office: data.properties.cwa,
      gridX: data.properties.gridX,
      girdY: data.properties.gridY,
      station: data.properties.radarStation,
      name: data.properties.relativeLocation.properties.city,
      state: data.properties.relativeLocation.properties.state
    });
  }
}
