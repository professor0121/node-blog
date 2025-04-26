const fs = require('fs');
const path = require('path');

module.exports = (viewName, data = {}) => {
  let html = fs.readFileSync(path.join(__dirname, '..', 'views', viewName), 'utf-8');
  for (const key in data) {
    html = html.replace(new RegExp(`{{${key}}}`, 'g'), data[key]);
  }
  return html;
};

