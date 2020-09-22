import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const cwa = this.activatedRoute.snapshot.params['cwa'];
    const grid = this.activatedRoute.snapshot.params['grid'];

    console.log(`${cwa}/${grid}`);
  }

}
