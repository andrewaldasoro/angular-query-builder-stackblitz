import { Component } from '@angular/core';
import { QueryBuilderConfig } from 'angular2-query-builder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  query = {
    condition: 'and',
    rules: [],
  };

  config: QueryBuilderConfig = {
    fields: {
      name: { name: 'Name', type: 'string' },
    },
  };
}
