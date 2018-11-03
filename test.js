var test = require("prova")
var title = require("./")

test("generate a title from url", function(t) {
  t.plan(13)
  t.equal(title("http://wikipedia.org"), "Wikipedia")
  t.equal(title("http://wikipedia.org/"), "Wikipedia")
  t.equal(
    title("https://en.wikipedia.org/wiki/Gezi"),
    "Gezi - Wiki on Wikipedia"
  )
  t.equal(
    title("encrypted.google.com.tr/search?q=foo&bar=qux"),
    "Search on Encrypted, Google"
  )
  t.equal(
    title("encrypted.google.co.uk/search?q=foo&bar=qux"),
    "Search on Encrypted, Google"
  )
  t.equal(
    title("encrypted.google.org.tr/search?q=foo&bar=qux"),
    "Search on Encrypted, Google"
  )
  t.equal(title("azer.bike/f.o-o/bar.html"), "Bar - F O O on Azer")
  t.equal(title("http://ada.io"), "Ada")
  t.equal(
    title("http://en.wikipedia.org/wiki/Foo_%28app%29"),
    "Foo (app) - Wiki on Wikipedia"
  )
  t.equal(
    title("http://hacks.mozilla.org/2014/06/breaking-the-borders-of-indexeddb"),
    "Breaking the Borders of Indexeddb on Hacks, Mozilla"
  )
  t.equal(
    title("https://twitter.com/naval/status/1002103360646823936?lang=en"),
    "Status - Naval on Twitter"
  )
  t.equal(title("localhost:8080"), "localhost:8080")
  t.equal(title("http://yo.lo:8080/foo/bar"), "Bar - Foo on yo.lo:8080")
})
