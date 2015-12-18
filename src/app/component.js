'use strict';

import {
  ComponentMetadata
} from 'angular2/core';

import MarkdownEditor from './markdown';

class AppComponent {
  constructor() {
    this.message = 'Hello Angular 2';
  }
}

AppComponent.annotations = [
  new ComponentMetadata({
    selector: 'my-app',
    template: '<div><h1>My first Angular2 app</h1>{{message}}<md-editor></md-editor></div>',
    directives: [MarkdownEditor]
  })
];

export default AppComponent;
