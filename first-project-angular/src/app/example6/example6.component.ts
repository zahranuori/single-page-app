import { Component } from '@angular/core';
import {flatMap} from "rxjs";

@Component({
  selector: 'app-example6',
  templateUrl: './example6.component.html',
  styleUrls: ['./example6.component.css']
})
export class Example6Component {
  userName: string ="";
  password: string ="";
  retypePassword: string ="";
  isPasswordMatch: boolean = false;

  public onUsernameInputChanged (e:Event){
    this.userName = (<HTMLInputElement>e.target).value;
  }
  public onPasswordInputChanged(e:Event){
    this.password = (<HTMLInputElement>e.target).value
  }
  public onRetypePasswordInputChanged(e:Event){
    this.retypePassword = (<HTMLInputElement>e.target).value
    this.isPasswordMatch = this.password !== this.retypePassword ? false : true;
  }
}
