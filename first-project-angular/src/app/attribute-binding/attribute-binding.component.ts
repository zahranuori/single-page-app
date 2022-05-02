import {Component, OnInit} from "@angular/core";

@Component({
  selector:"app-attribute-binding",
  templateUrl: "attribute-binding.component.html",
  styleUrls :['attribute-binding.component.css']
})
export class AttributeBindingComponent implements OnInit{
  isCorrect : boolean = true;
  username: string = "zahra :)";
  isModified : boolean = true;
  isCancelled : boolean = true;
  styles = {}
  classes = {}


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
}
