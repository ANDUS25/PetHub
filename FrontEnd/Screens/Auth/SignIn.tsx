import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import LottieView from 'lottie-react-native';
import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  AtSymbolIcon,
  EyeIcon,
  EyeSlashIcon,
  LockClosedIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import { auth } from '../../config/Config';
import GoogleSingInContainer from '../../Container/Socials/Google';
import { FontFamily } from '../../theme/Typography';
import Colors from '../../utils/color';
import { Title } from '../../utils/Strings';
import {
  emailValidation,
  hasaWhiteSpace,
  specialChar,
  toast,
  validationLength,
  valueIsEmpty,
} from '../../utils/utils';

const SignIn: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [togglePassword, setTogglePassword] = useState(true);

  const navigation = useNavigation<any>();

  const handleSignIn = async () => {
    try {
      if (
        valueIsEmpty(userName) ||
        valueIsEmpty(userEmail) ||
        valueIsEmpty(userPassword)
      ) {
        toast(Title.FILL_ALL_DATA);
      } else if (
        hasaWhiteSpace(userName) ||
        hasaWhiteSpace(userEmail) ||
        hasaWhiteSpace(userPassword)
      ) {
        toast(Title.NO_WHITESPACE);
      } else if (!emailValidation(userEmail)) {
        toast(Title.ENTER_VALID_EMAIL);
      } else if (specialChar(userName)) {
        toast(Title.NAME_NO_SPECIAL_CHAR);
      } else if (validationLength(userPassword, 8)) {
        toast(Title.PASSWORD_MIN_LENGTH);
      } else {
        await createUserWithEmailAndPassword(auth, userEmail, userPassword);

        toast(Title.USER_REGISTER_SUCCESS);

        setTimeout(() => {
          navigation.navigate('Home');
        }, 1000);
      }
    } catch (error: any) {
      AuthErrorHandler(error);
    }
  };

  const AuthErrorHandler = (error: any) => {
    if (error.message === 'Firebase: Error (auth/email-already-in-use)') {
      ToastAndroid.show(Title.EMAIL_ALREADY_USED, ToastAndroid.SHORT);
    } else if (error.message === 'Firebase: Error (auth/invalid-email)') {
      ToastAndroid.show(Title.EMAIL_NOT_VALID, ToastAndroid.SHORT);
    }
  };

  const handleLogIn = () => {
    navigation.navigate('LogIn');
  };

  return (
    <>
      <StatusBar hidden />
      <ScrollView>
        <View className="flex-1 items-center justify-around py-5 bg-gray-900 h-screen">
          <LottieView
            className="h-60 w-full"
            source={require('../../assets/animations/SignInAnimation.json')}
            autoPlay
            loop
          />
          <Text
            className="text-3xl my-8"
            style={{ fontFamily: FontFamily.MULISH_MEDIUM, color: Colors.WHITE }}
          >
            {Title.REGISTER}
          </Text>
          <View className="w-3/4">
            <View className="flex flex-row bg-white p-1 items-center mb-2 rounded-xl">
              <View className="mx-2">
                <UserIcon color={Colors.BLACK} />
              </View>

              <TextInput
                placeholder={Title.USER_NAME}
                placeholderTextColor={Colors.BLACK}
                value={userName}
                onChangeText={(e) => setUserName(e)}
                className="text-xl w-[250]"
                style={{ fontFamily: FontFamily.MULISH_MEDIUM, color: Colors.BLACK }}
              />
            </View>

            <View className="flex flex-row bg-white p-1 items-center mb-2 rounded-xl">
              <View className="mx-2">
                <AtSymbolIcon color={Colors.BLACK} />
              </View>
              <TextInput
                placeholder={Title.USER_EMAIL}
                placeholderTextColor={Colors.BLACK}
                value={userEmail}
                onChangeText={(e) => setUserEmail(e)}
                className="text-xl w-[250]"
                style={{ fontFamily: FontFamily.MULISH_MEDIUM, color: Colors.BLACK }}
                keyboardType="email-address"
              />
            </View>
            <View className="flex flex-row bg-white p-1 items-center rounded-xl">
              <View className="mx-2">
                <LockClosedIcon color={Colors.BLACK} />
              </View>

              <TextInput
                placeholder={Title.USER_PASSWORD}
                placeholderTextColor={Colors.BLACK}
                value={userPassword}
                onChangeText={(e) => setUserPassword(e)}
                className="text-xl"
                secureTextEntry={togglePassword}
                multiline={false}
                style={{
                  width: '75%',
                  fontFamily: FontFamily.MULISH_MEDIUM,
                  color: Colors.BLACK,
                }}
                maxLength={16}
              />
              <TouchableOpacity
                onPress={() => setTogglePassword(!togglePassword)}
              >
                {togglePassword ? (
                  <EyeIcon color={Colors.BLACK} />
                ) : (
                  <EyeSlashIcon color={Colors.BLACK} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex flex-row justify-center items-center my-6">
            <View className="border-b-2 w-1/2 mr-4 border-yellow-400" />
            <Text className="text-white">{Title.OR}</Text>
            <View className="border-b-2 w-1/2 ml-4 border-yellow-400" />
          </View>

          <TouchableOpacity>
            <GoogleSingInContainer />
          </TouchableOpacity>

          <TouchableOpacity
            className="mt-2 bg-yellow-400 p-5 w-48 items-center rounded-xl"
            onPress={handleSignIn}
          >
            <Text
              className="text-2xl"
              style={{ fontFamily: FontFamily.RALEWAY_BOLD, color: Colors.BLACK }}
            >
              {Title.SIGNIN}
            </Text>
          </TouchableOpacity>
          <View className="flex flex-row justify-center items-center my-6">
            <Text
              className="text-lg"
              style={{ fontFamily: FontFamily.RALEWAY_EXTRA_LIGHT, color: Colors.WHITE }}
            >
              {Title.ALREADY_HAVE_ACCOUNT}
            </Text>
            <TouchableOpacity onPress={handleLogIn}>
              <Text
                className="text-lg"
                style={{
                  fontFamily: FontFamily.RALEWAY_MEDIUM_ITALIC,
                  color: Colors.AUTH_LINK,
                }}
              >
                {Title.LOGIN}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default SignIn;
