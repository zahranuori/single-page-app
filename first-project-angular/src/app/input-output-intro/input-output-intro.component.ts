import { Component, OnInit } from '@angular/core';

@Component({
  // class selector
  selector: '.app-input-output-intro',

  templateUrl: './input-output-intro.component.html',
  styleUrls: ['./input-output-intro.component.css']
})
export class InputOutputIntroComponent implements OnInit {
  rating:number[] = [1,2,3,5,4];
  constructor() { }

  ngOnInit(): void {
  }

}
