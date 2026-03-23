import { useNavigation } from '@react-navigation/native';

import { signInWithEmailAndPassword } from 'firebase/auth';
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
} from 'react-native-heroicons/outline';
import Colors from '../../utils/Colors';

const path = '../../assets/animations/LogInAnimation.json';

const LogIn = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [togglePassword, setTogglePassword] = useState(true);

  const Navigation = useNavigation();

  const handleLogIn = async () => {
    if (!userEmail.includes('@' && '.com')) {
      ToastAndroid.show('Mail should contain @ and .com', ToastAndroid.SHORT);
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})\S+$/.test(userPassword)
    ) {
      ToastAndroid.show(
        'Password Should contain one Small, Capital and Special character.',
        ToastAndroid.SHORT,
      );
    } else {
      try {
        if (userEmail && userPassword) {
          await signInWithEmailAndPassword(auth, userEmail, userPassword);

          setTimeout(() => {
            ToastAndroid.show('User Login Successfully', ToastAndroid.SHORT);
          }, 3000);
        }
      } catch (error) {
        if (
          error.code === 'auth/user-not-found' ||
          error.code === 'auth/wrong-password'
        ) {
          ToastAndroid.show('Invalid email or password', ToastAndroid.SHORT);
        } else {
          ToastAndroid.show('Please check your credentials', ToastAndroid.SHORT);
        }
      }
    }
  };

  return (
    <>
      <StatusBar hidden />
      <ScrollView>
        <View className="flex-1 items-center justify-around pt-5 bg-gray-900 h-screen">
          <LottieView
            className="h-80 w-full"
            source={require(path)}
            autoPlay
            loop
          />
          <Text
            className="text-3xl my-8 text-white"
            style={{ fontFamily: 'Mulish-Medium' }}>
            LogIn
          </Text>
          <View style={{ width: '80%' }}>
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
              />
            </View>
            <View className="flex flex-row bg-white p-1 items-center rounded-xl">
              <View className="mx-2">
                <LockClosedIcon color={Colors.BLACK} />
              </View>
              <TextInput
                placeholder="User Password"
                placeholderTextColor={Colors.BLACK}
                value={userPassword}
                onChangeText={e => setUserPassword(e)}
                className="text-xl "
                secureTextEntry={togglePassword}
                multiline={false}
                style={{
                  width: '75%',
                  fontFamily: 'Mulish-Medium',
                  color: Colors.black,
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
          <TouchableOpacity
            className="my-8 bg-yellow-400 p-5 w-48 items-center rounded-xl"
            onPress={handleLogIn}>
            <Text
              className="text-2xl"
              style={{ fontFamily: 'Raleway-Bold', color: Colors.black }}>
              {' '}
              LogIn
            </Text>
          </TouchableOpacity>
          <View className="flex flex-row flex-1 items-center justify-center">
            <Text
              className="text-lg"
              style={{ fontFamily: 'Raleway-ExtraLight', color: Colors.White }}>
              Don't have an account{' '}
            </Text>
            <TouchableOpacity
              onPress={() => Navigation.navigate('SignIn')}>
              <Text
                className="text-lg self-center"
                style={{ fontFamily: 'Raleway-MediumItalic', color: Colors.AuthLink }}>
                signIn
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default LogIn;
