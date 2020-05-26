import * as Ably from 'ably';
import invariant from 'assert';
import Observable from 'zen-observable'
import PushNotification from 'react-native-push-notification'
import { Platform } from 'react-native';

if (Ably.Platform.push._pushObserver != null) {
  throw new Error(`Ably push notifications already configured with another provider`);
}

let token = null;
const observers = new Set();

// Setup the observer
Ably.Platform.push._pushObserver = new Observable(observer => {
  observers.add(observer);

  if (token != null) {
    if (Platform.OS === 'ios') {
      observer.next({ transportType: 'apns', deviceToken: token });
    } else if (Platform.OS === 'android') {
      observer.next({ transportType: 'fcm', registrationToken: token });
    }
  }

  return () => {
    observers.delete(observer);
  }
});

// For debugging
console.log('[ably-react-native] Setting up push notifications integration for react-native-push-notification')

// Public export:
export function onRegister(_token) {
  invariant(typeof _token === 'string', 'deviceToken must be a valid string');
  token = _token;

  observers.forEach(observer => {
    if (Platform.OS === 'ios') {
      observer.next({ transportType: 'apns', deviceToken: token });
    } else if (Platform.OS === 'android') {
      observer.next({ transportType: 'fcm', registrationToken: token });
    }
  });
}
