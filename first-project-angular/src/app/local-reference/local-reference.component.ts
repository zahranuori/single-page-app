import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-reference',
  templateUrl: './local-reference.component.html',
  styleUrls: ['./local-reference.component.css']
})
export class LocalReferenceComponent {

 
  public onClicked(val : string){
    alert(val);
  }
  public onClick(val : HTMLInputElement){
    console.log(val.value);
  }
}
