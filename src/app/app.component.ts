import {Component} from '@angular/core';
import * as _ from 'lodash';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public groups = [];

  constructor(private  http: HttpClient) {
    this.http.get('https://powerful-waters-72176.herokuapp.com/products')
      .subscribe((data: any) => {
        _.flatten(_.map(data, x => x.categories));
        this.groups = _.toPairs(_.reduce(_.uniq(_.flatten(_.map(data, x => x.categories))), (recorder, cat) => {
          recorder[cat] = _.filter(data, (item) => {
            return item.categories.includes(cat);
          });
          return recorder;
        }, {}));
      });

  }
}
