# offline-worker

## installation

```bash
$ npm i offline-worker --save-dev
$ cp node_modules/offline-worker/worker.js public
```

where public is your public/static directory

then in your front-end code use:

```js
import register from "offline-worker"

register()
```

## result

- your service worker makes your page run offline

- first getting fresh requests, and falling back on cache
