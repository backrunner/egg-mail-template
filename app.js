'use strict';

const fs = require('fs');

class MailTemplates {
  constructor(app) {
    this.app = app;
    this.config = app.config;
  }
  collectTemplates() {
    
  }
}

module.exports = MailTemplates;
