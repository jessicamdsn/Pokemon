import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CardComponent} from './components/card/card.component'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pokemon';
}
