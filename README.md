# psleep
Resolve a promise after some time. Good for async/await.

Uses the [ms module](https://github.com/rauchg/ms.js) for millisecond 
conversion.

```javascript

import psleep from 'psleep'

async function doThings () {
  console.log('hello...')
  await psleep('10 seconds')
  console.log('world!')
}

```
