'use strict';

import {
  Component
} from 'angular2/core';

import MarkdownEditor from './markdown';

@Component({
  selector: 'my-app',
  template: '<div><h1>My first Angular2 app</h1>{{message}}<md-editor></md-editor></div>',
  directives: [MarkdownEditor]
})
class AppComponent {
  constructor() {
    this.message = 'Hello Angular 2';
  }
}

export default AppComponent;
