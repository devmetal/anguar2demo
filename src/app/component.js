'use strict';

import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import MarkdownEditor from './markdown';

@Component({
  selector: 'my-app',
  template: `
  <div>
    <a [routerLink]="['MarkdownEditor']">MarkdownEditor</a>
    <a [routerLink]="['JsExamples']">JavaScript Examples</a>
  </div>
  <!-- Routed views go here -->
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/md-editor', name:'MarkdownEditor', component: MarkdownEditor},
  {path: '/js-examples', name:'JsExamples', component: JsExamples}
  {path: '/js-example/:slug', name:'JsExample', component: JsExample}
])
class AppComponent {
  constructor() {}
}

export default AppComponent;
