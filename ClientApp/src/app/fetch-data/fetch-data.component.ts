import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {
  public forecasts: WeatherForecast[];

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }

  async ngOnInit(): Promise<void> {
    const params: HttpParams = new HttpParams()
      .append('address', '3602 37th st. lubbock, tx, 79413')
      .append('benchmark', '8')
      .append('format', 'json');
    const data = await this.http.get<any>('https://cors-anywhere.herokuapp.com/https://geocoding.geo.census.gov/geocoder/locations/onelineaddress',
    {params}).toPromise();
    console.log(data);
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
