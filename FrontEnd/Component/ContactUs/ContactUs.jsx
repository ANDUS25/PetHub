import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { HeaderContainer, TextInputContainer } from '../../Container/index';
import { Title } from '../../utils/Strings';

const ContactUs = () => {
  const Navigation = useNavigation();
  const theme = useSelector(state => state.ThemeReducer.value);

  const [userInputInfo, setUserInputInfo] = useState({
    fName: '',
    lName: '',
    email: '',
    subject: '',
    message: '',
  });

  const OkHandler = () => {
    if (
      userInputInfo.fName == '' ||
      userInputInfo.lName == '' ||
      userInputInfo.email == ''
    ) {
      Alert.alert('please fill Names and Email at least');
    } else {
      ToastAndroid.show('Thank You for your response', ToastAndroid.CENTER);
      setTimeout(() => {
        Navigation.navigate('Landing');
      }, 3000);
    }
  };

  const handleConfirmation = () => {
    Alert.alert('Want to Submit Data !!!', '', [
      { text: 'Yes', onPress: OkHandler },
      {
        text: 'No',
        onPress: () => { },
        style: 'cancel',
      },
    ]);
  };

  return (
    <>
      <StatusBar />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: theme === 'light' ? '#B4D4FF' : '#201658',
        }}>
        <View>
          <HeaderContainer back={true} header={'Contact Us'} Drawer={true} />

          <View className="flex flex-col justify-between mx-2">
            <View className="my-4">
              <Text
                style={{
                  fontFamily: 'Mulish-Bold',
                  fontSize: 20,
                  color: theme === 'light' ? '#000' : '#fff',
                }}
                className="text-center">
                If you would like to donate to our cause or report a stray
                animal, then please contact our 24/7 help center.
              </Text>
            </View>
            <View>
              <TextInputContainer
                placeholder={'First Name'}
                className="w-full p-3 rounded-2xl my-2"
                style={Styles(theme).textInput}
                TextChange={e =>
                  setUserInputInfo(prev => ({ ...prev, fName: e }))
                }
                placeHolderColor={theme == 'light' ? 'white' : 'black'}
              />
              <TextInputContainer
                placeholder={'Last Name'}
                className="w-full p-3 rounded-2xl my-2"
                style={Styles(theme).textInput}
                TextChange={e =>
                  setUserInputInfo(prev => ({ ...prev, lName: e }))
                }
                placeHolderColor={theme == 'light' ? 'white' : 'black'}
              />
              <TextInputContainer
                placeholder={'Email Address'}
                className="w-full p-3 rounded-2xl my-2"
                style={Styles(theme).textInput}
                TextChange={e =>
                  setUserInputInfo(prev => ({ ...prev, email: e }))
                }
                placeHolderColor={theme == 'light' ? 'white' : 'black'}
              />
              <TextInputContainer
                placeholder={'Subject'}
                className="w-full p-3 rounded-2xl my-2"
                TextChange={e =>
                  setUserInputInfo(prev => ({ ...prev, subject: e }))
                }
                style={Styles(theme).textInput}
                placeHolderColor={theme == 'light' ? 'white' : 'black'}
              />
              <TextInputContainer
                placeholder={'Message'}
                className="w-full p-3 rounded-2xl my-2"
                TextChange={e =>
                  setUserInputInfo(prev => ({ ...prev, message: e }))
                }
                style={Styles(theme).textInput}
                placeHolderColor={theme == 'light' ? 'white' : 'black'}
              />
            </View>
            <TouchableOpacity onPress={handleConfirmation}>
              <View className="flex flex-row justify-center mx-auto bg-blue-500 w-1/2 p-4 rounded-2xl mt-6">
                <Text className="text-xl text-white">{Title.SUBMIT}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const Styles = theme =>
  StyleSheet.create({
    textInput: {
      backgroundColor: theme === 'light' ? '#201658' : '#B4D4FF',
      color: theme === 'light' ? '#fff' : '#000',
      fontFamily: 'Mulish-Medium',
      fontSize: 20,
    },
  });

export default ContactUs;
