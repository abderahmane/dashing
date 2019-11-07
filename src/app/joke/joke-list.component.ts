import {Component, OnInit} from '@angular/core';
import {Joke} from './joke.model';

@Component({
  selector: 'app-joke-list',
  template: `
<app-joke *ngFor="let j of jokes" [data]="j">
  <span class="setup">{{ j.setup }}?</span>
  <h1 class="punchline">{{ j.punchline }}</h1>
</app-joke>

<button type="button"
        class="btn btn-success"
        (click)="addJoke()">Add Joke
</button>
  <button type="button"
        class="btn btn-danger"
        (click)="deleteJoke()">Clear Jokes
</button>
`
})
export class JokeListComponent  implements OnInit {
  jokes: Joke[] = [];

  addJoke() {
    const joke: Joke = new Joke();
    joke.hide = false;
    joke.punchline = 'aaaaaaaa';
    joke.setup = 'bbbbbbbb';
    this.jokes.unshift(joke);
  }

  deleteJoke() {
    this.jokes = [];
  }

  ngOnInit(): void {
    this.addJoke();
  }
}
