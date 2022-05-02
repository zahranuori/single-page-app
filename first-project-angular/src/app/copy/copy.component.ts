import { Component} from "@angular/core";

@Component({
  selector:"app-copy",
  templateUrl : "copy.component.html"
})

export class CopyComponent {
  username: string = "";
  password: string = "";
  RetypePassword: string = "";
  isPasswordMatch: boolean = false;

  public onInputUsernameChanged(e: Event){
    this.username = (<HTMLInputElement>e.target).value;
  }
  public onInputPasswordChanged(e: Event){
    this.password = (<HTMLInputElement>e.target).value;
  }
  public onInputRetypePasswordChanged(e : Event) {
    this.RetypePassword = (<HTMLInputElement>e.target).value;
    this.isPasswordMatch = this.password !== this.RetypePassword ? false : true;
  }

}
