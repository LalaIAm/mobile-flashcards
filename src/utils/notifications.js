import { AsyncStorage } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

const NOTIFICATION_KEY = '@Flasher_Notification';

export function clearNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync()
  );
}

function createNotification() {
  return {
    title: 'Time to check on your cards',
    body: "Have you studied yet today? Don't forget to review your flashcards.",
    ios: {
      sound: true,
      _dispayInForeground: true,
    },
    android: {
      sticky: false,
    },
  };
}

export function setNotification(time) {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync();

            const notificationId = Notifications.scheduleLocalNotificationAsync(
              createNotification(),
              {
                time: time,
                repeat: 'day',
              }
            );

            AsyncStorage.setItem(
              NOTIFICATION_KEY,
              JSON.stringify(notificationId)
            );
          }
        });
      }
    });
}
