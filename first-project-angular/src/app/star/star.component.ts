import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input() rating : number = 1;
  width: number = 110;

  constructor() { }

  ngOnInit(): void {
    this.width = this.rating * 90 / 5;
  }

}
