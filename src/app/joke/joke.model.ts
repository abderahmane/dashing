export class Joke {
  public setup: string;
  public punchline: string;
  public hide: boolean;
  toggle() {
    this.hide = !this.hide;
  }
}
