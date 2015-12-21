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
