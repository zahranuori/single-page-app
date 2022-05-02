import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InputBoxComponent } from './input-box/input-box.component';
import {FormsModule} from "@angular/forms";
import { Example6Component } from './example6/example6.component';
import {CopyComponent} from "./copy/copy.component";
import {AttributeBindingComponent} from "./attribute-binding/attribute-binding.component";
import { DirectivesComponent } from './directives/directives.component';
import { InputOutputIntroComponent } from './input-output-intro/input-output-intro.component';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputBoxComponent,
    Example6Component,
    CopyComponent,
    AttributeBindingComponent,
    DirectivesComponent,
    InputOutputIntroComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
