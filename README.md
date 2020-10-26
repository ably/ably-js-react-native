# [Ably](https://www.ably.io)

[![npm version](https://badge.fury.io/js/ably.svg)](https://badge.fury.io/js/ably)
[![Bower version](https://badge.fury.io/bo/ably.svg)](https://badge.fury.io/bo/ably)

A React Native client library for [Ably Realtime](https://www.ably.io), a realtime data delivery platform.

This repo is a wrapper for the [ably-js client library](https://github.com/ably/ably-js) which introduces a dependency needed by [React Native](https://facebook.github.io/react-native/). See the [ably-js README](https://github.com/ably/ably-js) for usage details of the [ably-js client library](https://github.com/ably/ably-js). The ably-js library currently targets the [Ably 1.1 client library specification](https://www.ably.io/documentation/client-lib-development-guide/features/). You can jump to the '[Known Limitations](#known-limitations)' section to see the features this client library does not yet support or [view our client library SDKs feature support matrix](https://www.ably.io/download/sdk-feature-support-matrix) to see the list of all the available features.

For complete API documentation, see the [Ably Realtime documentation](https://www.ably.io/documentation).

## Known Limitations

The ably-js library currently *does not* support being the [target of a push notification](https://www.ably.io/documentation/general/push#activate) (i.e. web push)

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
import Ably from 'ably-react-native'
const realtime = new Ably.Rest(<options or api key>)

// Or if using a toolchain that doesn't support ES6 module syntax:
const Ably = require('ably-react-native');
const client = new Ably.Rest(<options or api key>);
```

For very old versions of React Native, which do not support the `react-native` automatic entrypoint, you may have to instead do
```javascript
var Ably = require('ably/browser/static/ably-reactnative.js');
```
(and similarly for Rest)

## Push notifications

To enable delivery of Ably content via remote push notifications, this package requires the user to install the following peer dependencies:

    yarn add react-native-device-info
    yarn add react-native-push-notification
    yarn add @react-native-community/push-notification-ios

#### Android

Follow the *react-native-push-notification* installation instructions [here](https://github.com/zo0r/react-native-push-notification#readme).  Make sure you have:

 * modified your `manifest.xml` file and added the necessary service
 * modified your project level `build.gradle` and added the gms dependency
 * modified your app level `build.gradle` and added the google/firebase plugin and implementations
 * added your credentials file (`google-services.json`) to `android/app`

#### IOS

Follow the *@react-native-community/push-notification-ios* installation instructions [here](https://github.com/react-native-push-notification-ios/push-notification-ios).  Make sure you have modified your `AppDelegate.h` and `AppDelegate.m` files exactly as described and run `cd ios && pod install`.

### Your app
In your react-native codebase, you will need to listen for the device-supplied token and register it with Ably:
```javascript
import Ably from 'ably-react-native'
import PushNotification from "react-native-push-notification";
...

  PushNotification.configure({
    onRegister: async deviceSpecificToken => await Ably.RNPushNotifications.register(ablyConnectionOptions, deviceSpecificToken);
  });

```

If the call to `register` fails you will need to retry when the cause of the failure is resolved.  

Note: *The device may generate new tokens arbitrarily, and so the `onRegister` callback may happen at any time, not just on app startup.*

To remove a device from Ably push notifications:
```
import Ably from 'ably-react-native'
import PushNotification from "react-native-push-notification";
...javascript

  Ably.RNPushNotifications.unregister(ablyConnectionOptions)

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
