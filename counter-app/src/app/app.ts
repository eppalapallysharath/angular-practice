import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CounterApp} from "./counter-app/counter-app"
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CounterApp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('counter-app');
}
