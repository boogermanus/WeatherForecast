import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  private BASE_URL = 'https://api.weather.gov/';

  constructor(private httpClient: HttpClient) { }

  public get(path: string): Promise<any> {
    return this.httpClient.get<any>(`${this.BASE_URL}${path}`).toPromise();
  }
}
