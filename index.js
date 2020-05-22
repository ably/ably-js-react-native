import Ably from 'ably';
import invariant from 'assert';

export function configurePush({ registrationToken, deviceToken, transportType }) {
  if (transportType === 'fcm') {
    invariant(typeof registrationToken === 'string', 'options.registrationToken must be a valid string');
    Ably.platform.push._pushDetails = {
      transportType,
      registrationToken,
    };
  }

  if (transportType === 'apns') {
    invariant(typeof deviceToken === 'string', 'options.deviceToken must be a valid string');
    Ably.platform.push._pushDetails = {
      transportType,
      deviceToken,
    };
  }

  throw new Error(`Unsupported transportType: ${transportType}`);
}

export default { ...Ably };
