import { View, Text, Button } from 'react-native';
import React from 'react';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';
import { Title } from '../../utils/Strings';

const ToastContainer = () => {
  return (
    <AlertNotificationRoot>
      <Button
        title={Title.DIALOG_BOX}
        onPress={() =>
          Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: Title.Success,
            textBody: Title.DIALOG_BOX_SUCCESS,
            button: Title.CLOSE,
          })
        }
      />
    </AlertNotificationRoot>
  );
};

export default ToastContainer;
