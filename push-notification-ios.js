import Ably from 'ably';
import Observable from 'zen-observable'
import PushNotificationIOS from '@react-native-community/push-notification-ios'

if (Ably.platform.push._pushObserver != null) {
  throw new Error(`Ably push notifications already configured with another provider`);
}

let deviceToken = null;
const observers = new Set();

PushNotificationIOS.once('register', _deviceToken => {
  deviceToken = _deviceToken;

  observers.forEach(observer => {
    observer.next({ transportType: 'apns', deviceToken });
  });
})

// Setup the observer
Ably.platform.push._pushObserver = new Observable(observer => {
  observers.add(observer);

  if (deviceToken != null) {
    observer.next({ transportType: 'apns', deviceToken });
  }

  return () => {
    observers.delete(observer);
  }
});

// For debugging
console.log('[ably-react-native] Setting up push notifications integration for @react-native-community/push-notification-ios')
