var test = require("prova");
var title = require("./");

test('generate a title from url', function (t) {
  t.plan(9);
  t.equal(title('http://wikipedia.org'), 'Wikipedia');
  t.equal(title('http://wikipedia.org/'), 'Wikipedia');
  t.equal(title('https://en.wikipedia.org/wiki/Gezi'), 'Gezi - Wiki on En, Wikipedia');
  t.equal(title('encrypted.google.com.tr/search?q=foo&bar=qux'), 'Search on Encrypted, Google');
  t.equal(title('encrypted.google.co.uk/search?q=foo&bar=qux'), 'Search on Encrypted, Google');
  t.equal(title('encrypted.google.org.tr/search?q=foo&bar=qux'), 'Search on Encrypted, Google');
  t.equal(title('azer.bike/f.o-o/bar.html'), 'Bar - F.o-o on Azer');
  t.equal(title('http://ada.io'), 'Ada');
  t.equal(title('http://en.wikipedia.org/wiki/Foo_%28app%29'), 'Foo (app) - Wiki on En, Wikipedia');
});
