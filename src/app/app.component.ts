import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, DoCheck,
  OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  title = 'dashing';
  constructor() {
    console.log('AppComponent::constructor');
  }

  ngOnInit(): void {
    console.log('AppComponent::ngOnInit');
  }

  ngAfterContentChecked(): void {
    console.log('AppComponent::ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('AppComponent::ngAfterContentInit');
  }

  ngAfterViewChecked(): void {
    console.log('AppComponent::ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('AppComponent::ngAfterViewInit');
  }

  ngDoCheck(): void {
    console.log('AppComponent::ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('AppComponent::ngOnChanges');
  }

  ngOnDestroy(): void {
    console.log('AppComponent::ngOnDestroy');
  }
}
