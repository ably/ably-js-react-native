import * as Ably from 'ably';
import Observable from 'zen-observable';
import firebase from '@react-native-firebase/app';

import '@react-native-firebase/messaging';

if (Ably.Platform.push._pushObserver != null) {
  throw new Error(`Ably push notifications already configured with another provider`);
}

// Setup the observer
Ably.Platform.push._pushObserver = new Observable((observer) => {
  firebase
    .messaging()
    .getToken()
    .then(
      (registrationToken) => {
        observer.next({ transportType: 'fcm', registrationToken });
      },
      (err) => {
        if (err && err.code === 'unregistered') {
          // Ignore
          return;
        }

        observer.error(err);
      },
    );

  return firebase.messaging().onTokenRefresh((registrationToken) => {
    observer.next({ transportType: 'fcm', registrationToken });
  });
});

// For debugging
console.log('[ably-react-native] Setting up push notifications integration for @react-native-firebase/messaging');
