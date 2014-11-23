var toTitle = require("to-title");

module.exports = urlToTitle;

function urlToTitle (url) {
  url = url.replace(/^\w+:\/\//, '');
  url = url.replace(/^www\./, '');

  var parts = url.split('?');
  var qs = parts[1];
  url = parts[0];
  url = url.replace(/\.\w+$/, '');

  parts = url.split('/');

  var name = parts[0];
  name = name.replace(/\.\w+(\/|$)/, '');

  if (parts.length == 1) {
    return toTitle(name);
  }

  if (qs) {
    qs = qs.replace(/\=/g, ':').replace(/\&/g, ', ');
    qs = ' (' + qs.slice(0, 25) + (qs.length > 25 ? '...' : '') + ')';
  } else {
    qs = '';
  }

  return toTitle(parts.slice(1).reverse().join(' - ')) + qs + ' @ ' + toTitle(name.split('.').join(', '));
}
