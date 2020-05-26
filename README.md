# [Ably](https://www.ably.io)

[![npm version](https://badge.fury.io/js/ably.svg)](https://badge.fury.io/js/ably)
[![Bower version](https://badge.fury.io/bo/ably.svg)](https://badge.fury.io/bo/ably)

A React Native client library for [Ably Realtime](https://www.ably.io), a realtime data delivery platform.

This repo is a wrapper for the [ably-js client library](https://github.com/ably/ably-js) which introduces a dependency needed by [React Native](https://facebook.github.io/react-native/). See the [ably-js README](https://github.com/ably/ably-js) for usage details of the [ably-js client library](https://github.com/ably/ably-js). The ably-js library currently targets the [Ably 1.1 client library specification](https://www.ably.io/documentation/client-lib-development-guide/features/). [See our client library SDKs feature support matrix](https://www.ably.io/download/sdk-feature-support-matrix) to see the list of all the available features.

For complete API documentation, see the [Ably Realtime documentation](https://www.ably.io/documentation).

## How to use this library

### Installation from npm

```
npm install ably-react-native react-native-randombytes @react-native-community/async-storage
```

### Usage

For the Realtime library:
```javascript
import * as Ably from 'ably-react-native'
const realtime = new Ably.Realtime(<options or api key>)

// Or if using a toolchain that doesn't support ES6 module syntax:
const Ably = require('ably');
const client = new Ably.Realtime(<options or api key>);
```

For the REST-only library:
```javascript
import * as Ably from 'ably-react-native'
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

### Push Notifications

To keep your React Native application logic simple, this library re-uses existing Push Notification libraries in your Application.

For `@react-native-firebase/messaging`, add this to your App code:

```js
import firebase from '@react-native-firebase/app'
import 'ably-react-native/react-native-firebase'

const ablyRealtime = new Ably.Realtime({
    key: '..',
});
ablyRealtime.push.activate();

firebase.initializeApp({...});
```

For `push-notification-ios`, add this to your App code:

```js
import 'ably-react-native/push-notification-ios'

const ablyRealtime = new Ably.Realtime({
    key: '..',
});
ablyRealtime.push.activate();
```

For `react-native-push-notification`, add this to your App code:

```js
import PushNotification from 'react-native-push-notification'
import { onRegister } from 'ably-react-native/react-native-push-notification'

const ablyRealtime = new Ably.Realtime({
    key: '..',
});
ablyRealtime.push.activate();

useEffect(() => {
    PushNotification.configure({
        onRegister(result) {
            // ... your existing code
            onRegister(result.token);
        },
        // ...
    })
}, []);
```

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
