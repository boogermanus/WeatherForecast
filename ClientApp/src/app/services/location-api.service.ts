import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationApiService {

  private PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
  private API_URL = 'https://geocoding.geo.census.gov/geocoder/locations/onelineaddress';
  private BENCHMARK = 8;
  private FORMAT = 'json';

  constructor(private httpClient: HttpClient) { }

  public get(address: string): Promise<any> {
    const params: HttpParams = new HttpParams()
      .append('address', address)
      .append('benchmark', this.BENCHMARK.toString())
      .append('format', this.FORMAT);

    return this.httpClient.get<any>(`${this.PROXY_URL}${this.API_URL}`, {params}).toPromise();
  }
}
