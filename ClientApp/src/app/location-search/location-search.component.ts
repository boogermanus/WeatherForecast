import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    return !this.address.valid && this.address.touched
    // this is dangerous
      && !this.longitude.touched && !this.latitude.touched;
  }
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      address: this.address,
      latitude: this.latitude,
      longitude: this.longitude,
    });
  }

  ngOnInit() {
  }

}
