'use strict';

import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';

@Injectable()
export default class {
  constructor(http: Http){
    this.http = http;
  }

  get topics() {
    return this.http.get('/topics')
      .map(res => res.json());
  }
}
