'use strict';

import 'zone.js/lib/browser/zone-microtask';
import 'reflect-metadata';
import 'babel-polyfill';

import AppComponent   from './app/component';
import TopicsService  from './app/services/topic.service';

import { provide }    from 'angular2/core';
import { bootstrap }  from 'angular2/bootstrap';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';

bootstrap(AppComponent, [
  TopicsService,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
