import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = "Menu";
  home: string = "Home";
  aboutUs : string = "About Us";
  itemes : string ="Items";
  isEnable : boolean = false ;
  constructor() {

  }

  ngOnInit(): void {
  }
// title: string = "Menu";

}
