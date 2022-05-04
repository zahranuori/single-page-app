import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  width: number = 130;
  rating : number = 3.5;
  constructor() { }

  ngOnInit(): void {
    this.width = this.rating * 130 / 6;
  }

}
