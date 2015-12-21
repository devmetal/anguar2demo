# Angular 2 with JavaScript ES6 #

This is a little markdown preview app. You can write some markdown code to textarea and below you will see the result.

## Angular 2 annotations ##

I found a solution to use Angular 2 annotations with javascript + babel.

```JavaScript
'use strict';

import {
  Component
} from 'angular2/core';

import MarkdownService from './markdown.service';

@Component({
  selector: 'md-editor',
  providers: [MarkdownService],
  template: "<textarea #markdown (keyup)='md(markdown.value)'></textarea><div [innerHTML]='content'></div>"
})
class MarkdownEditor {
  constructor(mdsrv) {
    this.content = "";
    this.mdsrv = mdsrv;
  }

  md(markdown) {
    this.content = this.mdsrv.toHtml(markdown);
  }
}

MarkdownEditor.parameters = [[MarkdownService]];

export default MarkdownEditor;
```

I use stage-0 and es2015 presets in babel, and i found this plugin for decorators: https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy

## Install ##

* Clone this repository
* Execute npm install command
* Execute npm install gulp -g
* Run gulp command in project
