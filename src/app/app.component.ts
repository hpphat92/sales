import {Component} from '@angular/core';
import data from './products.json';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data = data;
  public groups = [];

  constructor() {
    _.flatten(_.map(data, x => x.categories));
    this.groups = _.toPairs(_.reduce(_.uniq(_.flatten(_.map(data, x => x.categories))), (recorder, cat) => {
      recorder[cat] = _.filter(data, (item) => {
        return item.categories.includes(cat);
      });
      return recorder;
    }, {}));
  }
}
