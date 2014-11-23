## title-from-url

Generate a title from given URL

## Install

```bash
$ npm install title-from-url
```

## Usage

```js
var urlToTitle = require('url-to-title')

urlToTitle('http://wikipedia.org')
// => Wikipedia

urlToTitle('https://encrypted.google.com/search?q=foo&bar=qux')
// => Search (q:foo, bar:qux) @ Encrypted, Google
```
