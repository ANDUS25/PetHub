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
import Colors from '../../utils/Colors';
import {
  emailValidation,
  hasaWhiteSpace,
  specialChar,
  toast,
  validationLength,
  valueIsEmpty,
} from '../../utils/utils';

const SignIn = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [togglePassword, setTogglePassword] = useState(true);

  const navigation = useNavigation();

  const handleSignIn = async () => {
    try {
      if (
        valueIsEmpty(userName) ||
        valueIsEmpty(userEmail) ||
        valueIsEmpty(userPassword)
      ) {
        toast('Please fill all data correctly');
      } else if (
        hasaWhiteSpace(userName) ||
        hasaWhiteSpace(userEmail) ||
        hasaWhiteSpace(userPassword)
      ) {
        toast('Fields should not contain any white spaces');
      } else if (!emailValidation(userEmail)) {
        toast('Please enter a valid email address');
      } else if (specialChar(userName)) {
        toast('Name should not any contain special character');
      } else if (validationLength(userPassword, 8)) {
        toast('Password should be at least 8 characters long');
      } else {
        await createUserWithEmailAndPassword(auth, userEmail, userPassword);

        toast('User Register Successfully');

        setTimeout(() => {
          navigation.navigate('Home');
        }, 3000);
      }
    } catch (error) {
      AuthErrorHandler(error);
    }
  };

  const AuthErrorHandler = error => {
    if (error.message == 'Firebase: Error (auth/email-already-in-use)') {
      ToastAndroid.show('This Email is already used.', ToastAndroid.SHORT);
    } else if (error.message == 'Firebase: Error (auth/invalid-email)') {
      ToastAndroid.show('This Email is not valid.', ToastAndroid.SHORT);
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
            style={{ fontFamily: 'Mulish-Medium', color: Colors.WHITE }}>
            Register
          </Text>
          <View className="w-3/4">
            <View className="flex flex-row bg-white p-1 items-center mb-2 rounded-xl">
              <View className="mx-2">
                <UserIcon color={Colors.BLACK} />
              </View>

              <TextInput
                placeholder="User Name"
                placeholderTextColor={Colors.BLACK}
                value={userName}
                onChangeText={e => setUserName(e)}
                className="text-xl w-[250]"
                style={{ fontFamily: 'Mulish-Medium', color: Colors.BLACK }}
              />
            </View>

            <View className="flex flex-row bg-white p-1 items-center mb-2 rounded-xl">
              <View className="mx-2">
                <AtSymbolIcon color={Colors.BLACK} />
              </View>
              <TextInput
                placeholder="User Email"
                placeholderTextColor={Colors.BLACK}
                value={userEmail}
                onChangeText={e => setUserEmail(e)}
                className="text-xl w-[250]"
                style={{ fontFamily: 'Mulish-Medium', color: Colors.BLACK }}
                keyboardType="email-address"
              />
            </View>
            <View className="flex flex-row bg-white p-1 items-center rounded-xl">
              <View className="mx-2">
                <LockClosedIcon color={Colors.black} />
              </View>

              <TextInput
                placeholder="User Password"
                placeholderTextColor={Colors.BLACK}
                value={userPassword}
                onChangeText={e => setUserPassword(e)}
                className="text-xl"
                secureTextEntry={togglePassword}
                multiline={false}
                style={{
                  width: '75%',
                  fontFamily: 'Mulish-Medium',
                  color: Colors.BLACK,
                }}
                maxLength={16}
              />
              <TouchableOpacity
                onPress={() => setTogglePassword(!togglePassword)}>
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
            <Text className="text-white">OR</Text>
            <View className="border-b-2 w-1/2 ml-4 border-yellow-400" />
          </View>

          <TouchableOpacity>
            <GoogleSingInContainer />
          </TouchableOpacity>

          <TouchableOpacity
            className="mt-2 bg-yellow-400 p-5 w-48 items-center rounded-xl"
            onPress={handleSignIn}>
            <Text
              className="text-2xl"
              style={{ fontFamily: 'Raleway-Bold', color: Colors.BLACK }}>
              SignIn
            </Text>
          </TouchableOpacity>
          <View className="flex flex-row justify-center items-center my-6">
            <Text
              className="text-lg"
              style={{ fontFamily: 'Raleway-ExtraLight', color: Colors.WHITE }}>
              or already have an account{' '}
            </Text>
            <TouchableOpacity onPress={handleLogIn}>
              <Text
                className="text-lg"
                style={{
                  fontFamily: 'Raleway-MediumItalic',
                  color: Colors.AUTH_LINK,
                }}>
                LogIn
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default SignIn;
