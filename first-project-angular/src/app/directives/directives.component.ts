import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  isCorrect : boolean = true;
  username: string = "zahra :)";
  isModified : boolean = true;
  isCancelled : boolean = true;
  switchProperty : string = "b";

  styles = {}
  classes = {}
  users : string[] = ['zahra','reza','masom','meli'];
  contact : string[] = ['sara','nima','ava','avin']
  userObj : any = [
    { id:1 ,name : "molod"},
    { id:2 ,name : "mahtab"},
    { id:3 ,name : "anjela"},
    { id:4 ,name : "alex"},
    { id:5 ,name : "mosh"}
  ]

  ngOnInit(): void {
    this.styles = {
      'font-size':'7rem',
      'color': 'orange',
      'padding': '5rem'
    };
    this.classes = {
      'big-font-size' : this.isModified,
      'cancelled-color' : this.isCancelled
    }

  }
  public  addNewUser(){
    this.userObj = [
      { id:1 ,name : "molod"},
      { id:2 ,name : "mahi"},
      { id:3 ,name : "anjela"},
      { id:4 ,name : "alex"},
      { id:5 ,name : "mosh"},
      { id:7 ,name : "dina"},
      { id:8 ,name : "abed"},
    ]
  }
  public trackByFunc(index:number,el:any){
    return el.id;
  }
}
