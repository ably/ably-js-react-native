import DeviceInfo from 'react-native-device-info';
import {Platform} from 'react-native';
import * as Ably from 'ably';

class RNPushNotifications {
    /**
     *
     * @param options ably connection options
     * @param token push notification token (aka 'deviceToken' for IOS, or 'registrationToken' for android)
     * @param deviceId (optional) the id of the mobile device - defaults to the current device's unique id
     * @param formFactor (optional) the type of device - defaults to 'phone'
     * @returns {Promise<Types.DeviceDetails>}
     */
    static async register(options, token, deviceId = DeviceInfo.getUniqueId(), formFactor = 'phone') {
        const client = new Ably.Rest.Promise(options);

        let recipient;
        if (Platform.OS === 'ios')
            recipient = {transportType: 'apns', deviceToken: token};
        else if (Platform.OS === 'android')
            recipient = {transportType: 'fcm', registrationToken: token};
        else
            throw Error(`unsupported platform '${Platform.OS}'`);

        const deviceDetails = {
            id: deviceId,
            clientId: client.auth.clientId,
            platform: Platform.OS,
            formFactor,
            push: {
                recipient
            }
        };

        return client.push.admin.deviceRegistrations.save(deviceDetails);
    }

    static async unregister(options, id = DeviceInfo.getUniqueId()) {
        const client = new Ably.Rest.Promise(options);
        return client.push.admin.deviceRegistrations.remove(id);
    }
}

export default { RNPushNotifications, ...Ably };