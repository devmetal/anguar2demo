'use strict';

import { Component, Input } from 'angular2/core';
import { NgFor } from 'angular2/common';

class Example {
  constructor(name, desc) {
    this.name = name;
    this.desc = desc;
  }
}

@Component({
  selector: 'example-card',
  template: `
  <div class="col s12 m3">
    <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="jslogo.png">
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">{{name}}<i class="material-icons right">more_vert</i></span>
        <p><a href="#">Go to example</a></p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">{{name}}<i class="material-icons right">close</i></span>
        <p>{{desc}}</p>
      </div>
    </div>
  </div>
  `
})
class ExampleCard {

  @Input() example: Example;

  constructor() {
  }

  get name() {
    return this.example.name;
  }

  get desc() {
    return this.example.desc;
  }
}

@Component({
  selector: 'js-examples',
  template: `
  <div class="container">
    <div class="row">
      <div *ngFor="#example of examples">
        <example-card [example]="example"></example-card>
      </div>
    </div>
  </div>
  `,

  directives: [ExampleCard, NgFor]
})
export default class {
  constructor() {
    this.message = "JsExamples";
    this.examples = [
      new Example('HelloWorld', 'Hello World JavaScript example'),
      new Example('Closures', 'Closures JavaScript example'),
      new Example('Random', 'Random JavaScript example')
    ];
  }

  fn() {
    return true;
  }
}
