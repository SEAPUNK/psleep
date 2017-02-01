# psleep

# DEAR GOD DON'T USE THIS USE [`delay`](https://github.com/sindresorhus/delay) WITH [`ms`](https://github.com/zeit/ms) INSTEAD

Resolve a promise after some time. Good for async/await.

*basically the [delay module](https://github.com/sindresorhus/delay) with the ms module built in*

Uses the [ms module](https://github.com/zeit/ms) for millisecond 
conversion, if supplied argument is a string.

```javascript

import psleep from 'psleep'

async function doThings () {
  console.log('hello...')
  await psleep('10 seconds') // waits 10 seconds
  await psleep(2000) // waits 2 seconds
  console.log('world!')
}

```
