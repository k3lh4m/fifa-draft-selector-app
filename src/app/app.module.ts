import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LoggedInComponent} from "./components/logged-in/logged-in.component";
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";

@NgModule({
  declarations: [AppComponent, LoggedInComponent],
  imports: [
      CommonModule,
      BrowserModule,
      RouterModule.forRoot(
          ROUTES,
          { enableTracing: true } // <-- debugging purposes only
      )],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
