'use strict';

function feedTagHelper(path, options = {}) {
  const title = options.title || this.config.title;

  return `<link rel="alternate" href="${this.url_for(path)}" title="${title}"index.html>`;
}

module.exports = feedTagHelper;
