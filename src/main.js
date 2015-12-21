'use strict'

import 'zone.js/lib/browser/zone-microtask';
import 'reflect-metadata';
import 'babel-polyfill';

import AppComponent   from './app/component.js';
import { bootstrap }  from 'angular2/bootstrap';
import { ROUTER_PROVIDERS } from 'angular2/router';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS
]);
