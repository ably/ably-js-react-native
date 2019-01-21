# [Ably](https://www.ably.io)

A React Native client library for [Ably Realtime](https://www.ably.io), a realtime data delivery platform.

This repo is a wrapper for the [ably-js client library](https://github.com/ably/ably-js) which introduces a dependency needed by [React Native](https://facebook.github.io/react-native/). See the [ably-js README](https://github.com/ably/ably-js) for usage details of the [ably-js client library](https://github.com/ably/ably-js).

For complete API documentation, see the [Ably Realtime documentation](https://www.ably.io/documentation).

## How to use this library

### Installation from npm

    npm install ably-react-native

### Usage

For the Realtime library:
```javascript
import * as Ably from 'ably'
const realtime = new Ably.Realtime(<options or api key>)

// Or if using a toolchain that doesn't support ES6 module syntax:
const Ably = require('ably');
const client = new Ably.Realtime(<options or api key>);
```

For the REST-only library:
```javascript
import * as Ably from 'ably'
const realtime = new Ably.Rest(<options or api key>)

// Or if using a toolchain that doesn't support ES6 module syntax:
const Ably = require('ably');
const client = new Ably.Rest(<options or api key>);
```

For very old versions of React Native, which do not support the `react-native` automatic entrypoint, you may have to instead do
```javascript
var Ably = require('ably/browser/static/ably-reactnative.js');
```
(and similarly for Rest)

### API usage, tests, contributing, etc.

See [the ably-js repo](https://github.com/ably/ably-js).

## FAQs

### Is this repo actively maintained?

Yes, this repo typically has very fwe recent commits because this React Native repo doesn't do very much: it's a very thin wrapper around [the ably-js repo](https://github.com/ably/ably-js).

### Does this repo support all platforms supported by React Native?

Yes, as far as we know. If you find any issues, please raise an issue (in [this repo](https://github.com/ably/ably-js-react-native/issues) only for issues specific to react-native or this wrapper; all other issues should go in [the main ably-js repo](https://github.com/ably/ably-js/issues)) or [contact us](https://www.ably.io/contact)

## Release process

This library uses [semantic versioning](http://semver.org/). For each release, the following needs to be done:

* Update the version number by running `npm version <type>` ([see docs](https://docs.npmjs.com/cli/version)) and commit the change.
* Add a tag and push to origin such as `git tag v1.0.0 && git push origin v1.0.0`
* Run `npm publish` to publish the gem to [npm](https://www.npmjs.com/package/ably-react-native)

## License

Copyright (c) 2016 Ably Real-time Ltd, Licensed under the Apache License, Version 2.0.  Refer to [LICENSE](LICENSE) for the license terms.
