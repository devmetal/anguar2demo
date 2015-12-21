'use strict';

import {markdown} from 'markdown';

export default class {
  toHtml(md) {
    return markdown.toHTML(md);
  }
}
