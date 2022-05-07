import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {
  user: string = "Reza";
  isEnabled: boolean = true;
  // <!--event binding (event)="function" فانکشن نمایش اینپونت در پاراگراف -->
  public onInputChange(e : Event){
    this.user = (<HTMLInputElement>e.target).value;
    // برای شناختن ولیو باید نوع تارگت رو مشخص کنیم که تگ ما از نوع htmlInputElemnt بود و باید باتگ بالا شناخته میشد
    console.log(e)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
