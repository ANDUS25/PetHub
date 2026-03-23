import {View, Text} from 'react-native';
import React from 'react';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';

const ToastContainer = () => {
  return (
    <AlertNotificationRoot>
      <Button
        title={'dialog box'}
        onPress={() =>
          Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Success',
            textBody: 'Congrats! this is dialog box success',
            button: 'close',
          })
        }
      />
    </AlertNotificationRoot>
  );
};

export default ToastContainer;
