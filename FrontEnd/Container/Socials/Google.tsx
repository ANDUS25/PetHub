import { GOOGLE_WEB_CLIENT_ID } from '@env';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import React from 'react';
import { View } from 'react-native';
import { login } from '../../store/Slices/SocialSlice';
import { useAppDispatch } from '../../store/store';

const GoogleSingInContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId: GOOGLE_WEB_CLIENT_ID,
    offlineAccess: true,
  });

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const userInfo = await GoogleSignin.signIn();
      dispatch(login(userInfo));
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // other error
      }
    }
  };

  return (
    <View>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Icon}
        onPress={handleGoogleSignIn}
      />
    </View>
  );
};

export default GoogleSingInContainer;
