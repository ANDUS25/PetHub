import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Image,
  StatusBar,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import { ScrollViewContainer } from '../../Container';
import Header from '../../Container/Header';
import useAuth from '../../hooks/useAuth';
import { updateData } from '../../store/Slices/UserSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import Colors from '../../utils/color';

const UpdateProfile: React.FC = () => {
  const { user } = useAuth();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const theme = useAppSelector((state) => state.ThemeReducer.value);

  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [quote, setQuote] = useState('');
  const [userContact, setUserContact] = useState('');

  const handleProfileUpdate = () => {
    dispatch(
      updateData({
        Name: userName,
        Country: country,
        Email: user?.email || '',
        Age: age,
        SomeThingExtra: quote,
        Contact: userContact,
      }),
    );

    ToastAndroid.show('Profile Update Successfully', ToastAndroid.SHORT);

    setTimeout(() => {
      navigation.navigate('Profile');
    }, 1000);
  };

  return (
    <>
      <StatusBar />
      <ScrollViewContainer>
        <View>
          <Header back={true} header={'Update Profile'} Drawer={true} />
          <View className="flex items-center my-4">
            <Image source={require('../../assets/images/user.png')} />
          </View>

          <View>
            <View className="m-2">
              <Text
                style={{
                  color: theme === 'light' ? Colors.BLACK : Colors.WHITE,
                  fontFamily: 'Raleway-Regular',
                  fontSize: 18,
                }}
              >
                Name:-
              </Text>
              <TextInput
                value={userName}
                onChangeText={(e) => setUserName(e)}
                className="w-full p-3 rounded-2xl my-2"
                style={{
                  backgroundColor:
                    theme === 'light'
                      ? Colors.ACTIVE_TAB_BACKGROUND
                      : Colors.INACTIVE_TAB_BACKGROUND,
                  color: theme === 'light' ? Colors.WHITE : Colors.BLACK,
                  fontFamily: 'Mulish-Medium',
                  fontSize: 20,
                }}
              />
            </View>

            <View className="m-2">
              <Text
                style={{
                  color: theme === 'light' ? Colors.BLACK : Colors.WHITE,
                  fontFamily: 'Raleway-Regular',
                  fontSize: 18,
                }}
              >
                Email:-
              </Text>
              <TextInput
                value={user?.email || ''}
                editable={false}
                className="w-full p-3 rounded-2xl my-2"
                style={{
                  backgroundColor:
                    theme === 'light'
                      ? Colors.ACTIVE_TAB_BACKGROUND
                      : Colors.INACTIVE_TAB_BACKGROUND,
                  color: theme === 'light' ? Colors.WHITE : Colors.BLACK,
                  fontFamily: 'Mulish-Medium',
                  fontSize: 20,
                }}
              />
            </View>

            <View className="m-2">
              <Text
                style={{
                  color: theme === 'light' ? Colors.BLACK : Colors.WHITE,
                  fontFamily: 'Raleway-Regular',
                  fontSize: 18,
                }}
              >
                Age:-
              </Text>
              <TextInput
                value={age}
                onChangeText={(e) => setAge(e)}
                className="w-full p-3 rounded-2xl my-2"
                keyboardType="numeric"
                style={{
                  backgroundColor:
                    theme === 'light'
                      ? Colors.ACTIVE_TAB_BACKGROUND
                      : Colors.INACTIVE_TAB_BACKGROUND,
                  color: theme === 'light' ? Colors.WHITE : Colors.BLACK,
                  fontFamily: 'Mulish-Medium',
                  fontSize: 20,
                }}
              />
            </View>

            <View className="m-2">
              <Text
                style={{
                  color: theme === 'light' ? Colors.BLACK : Colors.WHITE,
                  fontFamily: 'Raleway-Regular',
                  fontSize: 18,
                }}
              >
                Number:-
              </Text>
              <TextInput
                value={userContact}
                onChangeText={(e) => setUserContact(e)}
                className="w-full p-3 rounded-2xl my-2"
                keyboardType="numeric"
                maxLength={10}
                style={{
                  backgroundColor:
                    theme === 'light'
                      ? Colors.ACTIVE_TAB_BACKGROUND
                      : Colors.INACTIVE_TAB_BACKGROUND,
                  color: theme === 'light' ? Colors.WHITE : Colors.BLACK,
                  fontFamily: 'Mulish-Medium',
                  fontSize: 20,
                }}
              />
            </View>

            <View className="m-2">
              <Text
                style={{
                  color: theme === 'light' ? Colors.BLACK : Colors.WHITE,
                  fontFamily: 'Raleway-Regular',
                  fontSize: 18,
                }}
              >
                Country:-
              </Text>
              <TextInput
                value={country}
                onChangeText={(e) => setCountry(e)}
                className="w-full p-3 rounded-2xl my-2"
                style={{
                  backgroundColor:
                    theme === 'light'
                      ? Colors.ACTIVE_TAB_BACKGROUND
                      : Colors.INACTIVE_TAB_BACKGROUND,
                  color: theme === 'light' ? Colors.WHITE : Colors.BLACK,
                  fontFamily: 'Mulish-Medium',
                  fontSize: 20,
                }}
              />
            </View>

            <View className="m-2">
              <Text
                style={{
                  color: theme === 'light' ? Colors.BLACK : Colors.WHITE,
                  fontFamily: 'Raleway-Regular',
                  fontSize: 18,
                }}
              >
                Something Extra !
              </Text>
              <TextInput
                value={quote}
                onChangeText={(e) => setQuote(e)}
                className="w-full p-3 rounded-2xl my-2"
                placeholder="Write something"
                placeholderTextColor={theme === 'light' ? Colors.WHITE : Colors.BLACK}
                style={{
                  backgroundColor:
                    theme === 'light'
                      ? Colors.ACTIVE_TAB_BACKGROUND
                      : Colors.INACTIVE_TAB_BACKGROUND,
                  color: theme === 'light' ? Colors.WHITE : Colors.BLACK,
                  fontFamily: 'Mulish-Medium',
                  fontSize: 20,
                }}
              />
            </View>
          </View>
        </View>
        <View className="flex items-center">
          <View className="w-1/2 my-4">
            <TouchableOpacity
              onPress={handleProfileUpdate}
              className="bg-teal-800 p-5 rounded-xl"
            >
              <Text className="text-white text-center">Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollViewContainer>
    </>
  );
};

export default UpdateProfile;
