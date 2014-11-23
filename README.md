## title-from-url

Generate a title from given URL

## Install

```bash
$ npm install title-from-url
```

## Usage

```js
var title = require('title-from-url')

title('http://wikipedia.org')
// => Wikipedia

title('https://encrypted.google.com/search?q=foo&bar=qux')
// => Search (q:foo, bar:qux) @ Encrypted, Google
```

see `test.js` for more info.
