import Ably from 'ably';
import { Platform } from 'react-native';

export function configurePush({ token }) {
  if (Platform.OS === 'android') {
    Ably.platform.push._pushDetails = {
      transportType: 'fcm',
      registrationToken: token,
    };
    return;
  }
  if (Platform.OS === 'ios') {
    Ably.platform.push._pushDetails = {
      transportType: 'apns',
      deviceToken: token,
    };
    return;
  }

  throw new Error(`Unsupported OS: ${Platform.OS}`);
}

export default { ...Ably };
