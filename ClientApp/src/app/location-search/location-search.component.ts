import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material';
import { Router } from '@angular/router';
import { IPoint } from '../interfaces/ipoint';
import { LocationSearchService } from '../services/location-search.service';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})
export class LocationSearchComponent implements OnInit {

  public form: FormGroup;
  public address: FormControl = new FormControl('', Validators.required);
  public latitude: FormControl = new FormControl(0,
    Validators.compose([
      Validators.required,
      Validators.max(90),
      Validators.min(-90)
    ]));
  public longitude: FormControl = new FormControl(0,
    Validators.compose([
      Validators.required,
      Validators.max(180),
      Validators.min(-180)
    ]));

  public addressSearchError = false;
  public latLongSearchError = false;

  public get getAddressInvalid(): boolean {
      return this.address.enabled && !this.address.valid && this.address.touched;
  }

  public get latitudeInvalid(): boolean {
    return this.latitude.enabled && !this.latitude.valid && this.latitude.touched;
  }

  public get longitudeInvalid(): boolean {
    return this.longitude.enabled && !this.longitude.valid && this.longitude.touched;
  }

  constructor(private formBuilder: FormBuilder,
              private locationSearchService: LocationSearchService,
              private router: Router) {
    this.form = this.formBuilder.group({
      address: this.address,
      latitude: this.latitude,
      longitude: this.longitude,
    });
  }

  public ngOnInit() {
    this.latitude.disable();
    this.longitude.disable();
  }

  public buttonToggle(event: MatButtonToggleChange): void {
    if (event.value === 'address') {
      this.disableLocation();
    }
    else {
      this.disableAddress();
    }
  }

  private disableLocation() {

    this.latitude.setValue(0);
    this.longitude.setValue(0);
    this.address.enable();
    this.address.markAsUntouched();
    this.latitude.disable();
    this.longitude.disable();
  }

  private disableAddress() {
    this.address.setValue('');
    this.address.disable();
    this.latitude.enable();
    this.longitude.enable();
  }

  public async search(): Promise<void> {

    this.addressSearchError = false;
    this.latLongSearchError = false;
    let data: IPoint = null;
    if (!this.address.disabled) {
      data = await this.addressSearch();
    }
    else {
      data = await this.latLongSearch();
    }

    this.router.navigate(['/forecast', data.cwa, data.radarStation, `${data.gridX},${data.girdY}`]);
  }

  private async addressSearch(): Promise<IPoint> {
    try {
      return await this.locationSearchService.searchAddress(this.address.value);
    }
    catch (e) {
      console.log(`search address error ${e}`);
      this.addressSearchError = true;
    }
  }

  private async latLongSearch(): Promise<IPoint> {
    try {
      return await this.locationSearchService.searchLatitudeLongitude(
        this.latitude.value, this.longitude.value);
    }
    catch (e) {
      console.log(`search latitude/longitude error: ${JSON.stringify(e)}`);
      this.latLongSearchError = true;
    }
  }
}
