import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButtonToggleChange } from '@angular/material';

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

  get getAddressInvalid(): boolean {
    return this.address.enabled && !this.address.valid && this.address.touched;
  }

  get latitudeInvalid(): boolean {
    return this.latitude.enabled && !this.latitude.valid && this.latitude.touched;
  }

  get longitudeInvalid(): boolean {
    return this.longitude.enabled && !this.longitude.valid && this.longitude.touched;
  }
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      address: this.address,
      latitude: this.latitude,
      longitude: this.longitude,
    });
  }

  ngOnInit() {
    this.latitude.disable();
    this.longitude.disable();
  }

  buttonToggle(event: MatButtonToggleChange): void {
    if (event.value === 'address') {
      this.address.enable();
      this.latitude.disable();
      this.longitude.disable();
    } else {
      this.address.disable();
      this.latitude.enable();
      this.longitude.enable();
    }
  }
}
