import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { Title } from '../utils/Strings';
import Colors from '../utils/Colors';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar hidden />
      <View
        className="flex-1 justify-around items-center"
        style={{ backgroundColor: Colors.BUTTON_DARK }}>
        <LottieView
          autoPlay
          loop
          source={require('../assets/animations/anim.json')}
          style={{ height: 400, aspectRatio: 1 }}
        />
        <TouchableOpacity
          className="p-3 bg-blue-300 w-1/2 rounded-xl flex flex-row justify-center items-center"
          onPress={() => navigation.navigate('SignIn')}>
          <Text className={`text-2xl text-center text-black`}>
            {Title.WELCOME}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default WelcomeScreen;
