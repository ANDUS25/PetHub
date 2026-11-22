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
import { auth } from '../../config/Config';
import { FontFamily } from '../../theme/Typography';
import Colors from '../../utils/color';
import { Title } from '../../utils/Strings';

const LogIn: React.FC = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [togglePassword, setTogglePassword] = useState(true);

  const navigation = useNavigation<any>();

  const handleLogIn = async () => {
    if (!userEmail.includes('@') || !userEmail.includes('.com')) {
      ToastAndroid.show(Title.EMAIL_VALIDATION_ERROR, ToastAndroid.SHORT);
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})\S+$/.test(userPassword)
    ) {
      ToastAndroid.show(Title.PASSWORD_VALIDATION_ERROR, ToastAndroid.SHORT);
    } else {
      try {
        if (userEmail && userPassword) {
          await signInWithEmailAndPassword(auth, userEmail, userPassword);

          setTimeout(() => {
            ToastAndroid.show(Title.USER_LOGIN_SUCCESS, ToastAndroid.SHORT);
          }, 1000);
        }
      } catch (error: any) {
        if (
          error.code === 'auth/user-not-found' ||
          error.code === 'auth/wrong-password'
        ) {
          ToastAndroid.show(Title.INVALID_EMAIL_OR_PASSWORD, ToastAndroid.SHORT);
        } else {
          ToastAndroid.show(Title.CHECK_CREDENTIALS, ToastAndroid.SHORT);
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
            source={require('../../assets/animations/LogInAnimation.json')}
            autoPlay
            loop
          />
          <Text
            className="text-3xl my-8 text-white"
            style={{ fontFamily: FontFamily.MULISH_MEDIUM }}
          >
            {Title.LOGIN}
          </Text>
          <View style={{ width: '80%' }}>
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
          <TouchableOpacity
            className="my-8 bg-yellow-400 p-5 w-48 items-center rounded-xl"
            onPress={handleLogIn}
          >
            <Text
              className="text-2xl"
              style={{ fontFamily: FontFamily.RALEWAY_BOLD, color: Colors.BLACK }}
            >
              {Title.LOGIN}
            </Text>
          </TouchableOpacity>
          <View className="flex flex-row flex-1 items-center justify-center">
            <Text
              className="text-lg"
              style={{ fontFamily: FontFamily.RALEWAY_EXTRA_LIGHT, color: Colors.WHITE }}
            >
              {Title.DONT_HAVE_ACCOUNT}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text
                className="text-lg self-center"
                style={{
                  fontFamily: FontFamily.RALEWAY_MEDIUM_ITALIC,
                  color: Colors.AUTH_LINK,
                }}
              >
                {Title.SIGNIN}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default LogIn;
