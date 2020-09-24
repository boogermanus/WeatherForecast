import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-observations',
  templateUrl: './current-observations.component.html',
  styleUrls: ['./current-observations.component.css']
})
export class CurrentObservationsComponent implements OnInit {

  @Input() public station: string;

  constructor() { }

  ngOnInit() {
  }

}
