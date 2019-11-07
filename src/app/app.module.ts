import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import {JokeListComponent} from './joke/joke-list.component';
import {Joke} from './joke/joke.model';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent, JokeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Joke],
  bootstrap: [AppComponent]
})
export class AppModule { }
