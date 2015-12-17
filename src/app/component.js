'use strict';

import 'zone.js/lib/browser/zone-microtask';
import 'reflect-metadata';
import 'babel-polyfill';

import {
  Component, bootstrap
} from 'angular2/angular2';

@Component({
  selector: 'my-app'
})
@View({
  template: '<div><h1>My first angular2 app</h1><p>{{message}}</p></div>'
});
class AppComponent {
  constructor(){
    this.message = 'Hello Angular2';
  }
}

bootstrap(AppComponent);
