var toTitle = require("to-title");

module.exports = urlToTitle;

function urlToTitle (url) {
  url = unescape(url).replace(/_/g, ' ');
  url = url.replace(/^\w+:\/\//, '');
  url = url.replace(/^www\./, '');
  url = url.replace(/(\/|\?)$/, '');

  var parts = url.split('?');
  url = parts[0];
  url = url.replace(/\.\w+$/, '');

  parts = url.split('/');

  var name = parts[0];
  name = name.replace(/\.\w+(\/|$)/, '').replace(/\.(com?|net|org|fr)$/, '')

  if (parts.length == 1) {
    return title(name);
  }

  return toTitle(parts.slice(1).reverse().map(toTitle).join(' - ')) + ' on ' + title(name);
}

function title (host) {
  if (/^[\w\.\-]+:\d+/.test(host)) {
    return host
  }

  return toTitle(host.split('.').join(', '))
}
