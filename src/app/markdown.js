'use strict';

import {
  ComponentMetadata
} from 'angular2/core';

import {MarkdownService} from './markdown.service';

class MarkdownEditor {
  constructor(mdsrv) {
    this.content = "";
    this.mdsrv = mdsrv;
  }

  md(markdown) {
    this.content = this.mdsrv.toHtml(markdown);
  }
}

MarkdownEditor.annotations = [
  new ComponentMetadata({
    selector: 'md-editor',
    providers: [MarkdownService],
    template: "<textarea #markdown (keyup)='md(markdown.value)'></textarea><div [innerHTML]='content'></div>"
  })
]

MarkdownEditor.parameters = [[MarkdownService]];

export default MarkdownEditor;
