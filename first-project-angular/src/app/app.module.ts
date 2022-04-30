import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InputBoxComponent } from './input-box/input-box.component';
import {FormsModule} from "@angular/forms";
import { Example6Component } from './example6/example6.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputBoxComponent,
    Example6Component
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
