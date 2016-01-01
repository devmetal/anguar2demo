'use strict';

import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import MarkdownEditor from './markdown';
import JsExamples     from './jsexamples';

@Component({
  selector: 'my-app',
  template: `
  <nav class="indigo indigo-text darken-4 text-lighten-5">
    <div class="container nav-wrapper">
      <a href="#/" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a [routerLink]="['MarkdownEditor']">MarkdownEditor</a></li>
        <li><a [routerLink]="['JsExamples']">JavaScript Examples</a></li>
      </ul>
    </div>
  </nav>
  <!-- Routed views go here -->
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/md-editor', name:'MarkdownEditor', component: MarkdownEditor},
  {path: '/js-examples', name:'JsExamples', component: JsExamples}
  /*{path: '/js-example/:slug', name:'JsExample', component: JsExample}*/
])
class AppComponent {
  constructor() {}
}

export default AppComponent;
