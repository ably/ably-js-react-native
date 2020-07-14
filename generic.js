import * as Ably from 'ably';
import Observable from 'zen-observable';
import { Platform } from 'react-native';
import { invariant } from './common';

if (Ably.Platform.push._pushObserver != null) {
  throw new Error(`Ably push notifications already configured with another provider`);
}

let payload = null;
const observers = new Set();

// Setup the observer
Ably.Platform.push._pushObserver = new Observable((observer) => {
  observers.add(observer);

  if (payload != null) {
    observer.next(payload);
  }

  return () => {
    observers.delete(observer);
  };
});

// For debugging
console.log('[ably-react-native] Setting up push notifications integration for generic interface');

// Public export:
export function onRegister(_payload) {
  invariant(_payload != null && typeof _payload === 'object', 'payload must be a valid object');
  invariant(typeof _payload.transportType === 'string', 'payload.transportType must be a valid string');

  if (_payload.transportType === 'apns') {
    invariant(typeof _payload.deviceToken === 'string', 'payload.deviceToken must be a valid string for APNS');
  } else if (_payload.transportType === 'fcm') {
    invariant(typeof _payload.registrationToken === 'string', 'payload.registrationToken must be a valid string for FCM');
  } else {
    // TODO: What other transports should we allow? Should we throw an error on unknown ones?
  }

  payload = _payload;

  observers.forEach((observer) => {
    observer.next(payload);
  });
}
