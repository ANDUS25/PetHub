import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import {GOOGLE_WEB_CLIENT_ID} from '@env';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../toolkit/SocialSlice';

const GoogleSingInContainer = () => {
  const dispatch = useDispatch();
  const log = useSelector(state => state.SocialReducer);

  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId: GOOGLE_WEB_CLIENT_ID,
    offlineAccess: true,
  });

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const userInfo = await GoogleSignin.signIn();
      dispatch(login(userInfo));
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  return (
    <View>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Icon}
        // color={GoogleSigninButton.Color.Light}
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};

export default GoogleSingInContainer;
