import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-viewchid-encapsulation',
  templateUrl: './viewchid-encapsulation.component.html',
  styleUrls: ['./viewchid-encapsulation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewchidEncapsulationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
