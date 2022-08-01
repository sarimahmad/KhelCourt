import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';

import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      if (props.userData == null) {
        console.log('props.userDatalogin', props.userData);
        props.navigation.replace('AuthMain');
      } else {
        console.log('props.userDatabottom', props.userData);
        props.navigation.replace('Main');
      }
    }, 3000);
  }, []);


  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
  useEffect(() => {
    setTimeout(() => {
      requestUserPermission();
    }, 500);
  }, []);
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      await messaging().registerDeviceForRemoteMessages();
      const fcmToken = await messaging().getToken();
      console.log(fcmToken)
      checkToken();
    }
  }

  const checkToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
    }
    if (Platform.OS == 'ios') {
      PushNotificationIOS.addEventListener(
        'notification',
        onRemoteNotification,
      );
      PushNotification.configure({
        // (optional) Called when Token is generated (iOS and Android)
        onRegister: function (token) {},

        // (required) Called when a remote or local notification is opened or received
        onNotification: function (notification) {
          console.log('NOTIFICATION:', notification);
          PushNotificationIOS.presentLocalNotification({
            alertBody: 'call',
            alertTitle: 'ok',
          });

          // required on iOS only
          notification.finish(PushNotificationIOS.FetchResult.NoData);
        },
        // Android only
        senderID: '1090501687137',
        // iOS only
        permissions: {
          alert: true,
          badge: true,
          sound: true,
        },
        popInitialNotification: true,
        requestPermissions: true,
      });
    } else {
      PushNotification.configure({
        // (optional) Called when Token is generated (iOS and Android)
        onRegister: function (token) {},

        // (required) Called when a remote or local notification is opened or received
        onNotification: function (notification) {
          PushNotification.createChannel(
            {
              channelId: '2', // (required)
              channelName: 'notificationGatewayTherapute', // (required)
              channelDescription: 'YOUR NOTIFICATION CHANNEL DESCRIPTION', // (optional) default: undefined.
              playSound: true, // (optional) default: true
              soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
              // importance: Importance.DEFAULT, // (optional) default: Importance.HIGH. Int value of the Android notification importance
              vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
            },
            created => {
              console.log('DoneCreated');
            },
          );

          PushNotification.localNotification({
            /* Android Only Properties */
            channelId: '2',
            foreground: true, // (required) channelId, if the channel doesn't exist, notification will not trigger.
            largeIcon: 'ic_launcher', // (optional) default: "ic_launcher". Use "" for no large icon.
            largeIconUrl: 'https://www.example.tld/picture.jpg', // (optional) default: undefined
            smallIcon: 'ic_notification', // (optional) default: "ic_notification" with fallback for "ic_launcher". Use "" for default small icon.
            bigText:
              'My big text that will be shown when notification is expanded. Styling can be done using HTML tags(see android docs for details)', // (optional) default: "message" prop
            subText: 'This is a subText', // (optional) default: none
            bigPictureUrl: 'https://www.example.tld/picture.jpg', // (optional) default: undefined
            bigLargeIcon: 'ic_launcher', // (optional) default: undefined
            bigLargeIconUrl: 'https://www.example.tld/bigicon.jpg', // (optional) default: undefined
            color: 'red', // (optional) default: system default
            vibrate: true, // (optional) default: true
            vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
            priority: 'high', // (optional) set notification priority, default: high
            visibility: 'private', // (optional) set notification visibility, default: private
            ignoreInForeground: false, // (optional) if true, the notification will not be visible when the app is in the foreground (useful for parity with how iOS notifications appear). should be used in combine with `com.dieam.reactnativepushnotification.notification_foreground` setting

            timeoutAfter: null, // (optional) Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled, default: null

            messageId: 'google:message_id', // (optional) added as `message_id` to intent extras so opening push notification can find data stored by @react-native-firebase/messaging module.

            invokeApp: true, // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true

            /* iOS only properties */
            category: '', // (optional) default: empty string
            subtitle: 'My Notification Subtitle', // (optional) smaller title below notification title

            /* iOS and Android properties */
            id: 0, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
            title: 'My Notification Title', // (optional)
            message: 'My Notification Message', // (required)
            picture: 'https://www.example.tld/picture.jpg', // (optional) Display an picture with the notification, alias of `bigPictureUrl` for Android. default: undefined
            userInfo: {}, // (optional) default: {} (using null throws a JSON value '<null>' error)
            playSound: true, // (optional) default: true
            soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played) // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
          });

          // process the notification here

          // required on iOS only
          notification.finish(PushNotificationIOS.FetchResult.NoData);
        },
        // Android only
        senderID: '1090501687137',
        // iOS only
        permissions: {
          alert: true,
          badge: true,
          sound: true,
        },
        popInitialNotification: true,
        requestPermissions: true,
      });
    } // (optional) callback returns whether the channel was created, false means it already existed.
  };

  const onRemoteNotification = notification => {
    const isClicked = notification.getData().userInteraction === 1;

    if (isClicked) {
      // Navigate user to another screen
    } else {
      // Do something else with push notification
    }
  };


  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/splash.jpg')}
        style={styles.image}
      />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    userToken: state.authData.token,
    userData: state.authData.userData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetUserToken: data => {
      dispatch(setAuthToken(data));
    },
    onSetUserData: data => {
      dispatch(setAuthUser(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
