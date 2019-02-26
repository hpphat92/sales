import {Component} from '@angular/core';
import data from './products.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data = data;

  constructor() {
    console.log(data);
  }
}
