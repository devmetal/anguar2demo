'use strict';

export default class {
  constructor(name, examples) {
    this._name = name;
    this._examples = examples;
  }

  get examples() {
    return this.examples;
  }

  get name() {
    return this.name;
  }
}
