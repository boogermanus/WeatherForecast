import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  public route = '';
  public station = '';
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const office = this.activatedRoute.snapshot.params['office'];
    const grid = this.activatedRoute.snapshot.params['grid'];
    this.station = this.activatedRoute.snapshot.params['station'];
  }

}
