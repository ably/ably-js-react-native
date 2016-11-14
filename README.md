# [Ably](https://www.ably.io)

This repo is wrapper for [ably-js](https://github.com/ably/ably-js) that adds a dependency used by react-native. See [that repo](https://github.com/ably/ably-js) for the readme for ably-js.

For complete API documentation, see the [ably documentation](https://ably.io/documentation).

## For react-native

### Installation from npm

    npm install ably-react-native

### Usage

For the realtime library:

```javascript
var realtime = require('ably').Realtime;
```

For the rest-only library:

```javascript
var realtime = require('ably').Rest;
```

For older versions of React Native, which do not support the `react-native` automatic entrypoint, you may have to instead do

```javascript
var realtime = require('ably/browser/static/ably-reactnative.js').Realtime
```
(and similarly for Rest)


### API usage, tests, contributing, etc.

See [the ably-js repo](https://github.com/ably/ably-js).

## License

Copyright (c) 2015 Ably Real-time Ltd, Licensed under the Apache License, Version 2.0.  Refer to [LICENSE](LICENSE) for the license terms.
