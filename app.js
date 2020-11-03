'use strict';

const fs = require('fs');
const path = require('path');
const camelcase = require('camelcase');

class MailTemplates {
  constructor(app) {
    this.config = app.config.mailTemplate;
    app.mailTemplates = this.collectTemplates();
  }
  collectTemplates() {
    const { path: dir } = this.config;
    const res = fs.readdirSync(dir, { encoding: 'utf-8' });
    const map = {};
    res.forEach(file => {
      if (path.extname(file).toLowerCase() === '.html') {
        const template = fs.readFileSync(path.resolve(dir, file), { encoding: 'utf-8' });
        const key = camelcase(file.replace('.html', ''));
        map[key] = template;
      }
    });
    return map;
  }
}

module.exports = MailTemplates;
