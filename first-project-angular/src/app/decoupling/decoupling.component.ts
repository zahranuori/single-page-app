import { Component } from '@angular/core';
import {user} from "./decopling-interface"
@Component({
  selector: '[app-decoupling]',
  templateUrl: './decoupling.component.html',
  styleUrls: ['./decoupling.component.css']
})
export class DecouplingComponent  {
users : user[] = [];


  public userAdded (users: user[]){
    this.users = users;
  }
}
