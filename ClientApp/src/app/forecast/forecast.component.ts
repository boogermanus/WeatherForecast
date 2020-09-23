import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  route = '';
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const office = this.activatedRoute.snapshot.params['office'];
    const grid = this.activatedRoute.snapshot.params['grid'];
    const station = this.activatedRoute.snapshot.params['station'];

    this.route = `${office}/${station}/${grid}`;
  }

}
