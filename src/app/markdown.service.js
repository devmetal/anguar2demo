'use strict';

import {markdown} from 'markdown';

function MarkdownService() {
}

MarkdownService.prototype.toHtml = function toHtml(md) {
  return markdown.toHTML(md);
}

exports.MarkdownService = MarkdownService;
