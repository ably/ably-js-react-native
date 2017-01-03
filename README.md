# [Ably](https://www.ably.io)

A React Native client library for [Ably Realtime](https://www.ably.io), a realtime data delivery platform.

This repo is a wrapper for the [ably-js client library](https://github.com/ably/ably-js) which introduces a dependency needed by [React Native](https://facebook.github.io/react-native/). See the [ably-js README](https://github.com/ably/ably-js) for usage details of the [ably-js client library](https://github.com/ably/ably-js).

For complete API documentation, see the [Ably Realtime documentation](https://www.ably.io/documentation).

## How to use this library

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
var realtime = require('ably/browser/static/ably-reactnative.js').Realtime;
```

(and similarly for Rest)

### API usage, tests, contributing, etc.

See [the ably-js repo](https://github.com/ably/ably-js).

## FAQs

### Is this repo actively maintained?

Yes, this repo typically has very recent commits because this React Native repo doesn't do very much: it's a very thin wrapper around [the ably-js repo](https://github.com/ably/ably-js).

### Does this repo support all platforms supported by React Native?

Yes, as far as we know. If you find any issues, please [raise an issue](https://github.com/ably/ably-js-react-native/issues) or [contact us](https://www.ably.io/contact)

## License

Copyright (c) 2016 Ably Real-time Ltd, Licensed under the Apache License, Version 2.0.  Refer to [LICENSE](LICENSE) for the license terms.
