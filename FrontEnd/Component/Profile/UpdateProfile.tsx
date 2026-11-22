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
import { Typography } from '../../theme/Typography';
import Colors from '../../utils/color';
import { ScreenRouteName, ScreenTitle, Title } from '../../utils/Strings';

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

  const isLight = theme === 'light';
  const labelColor = isLight ? Colors.BLACK : Colors.WHITE;
  const inputColor = isLight ? Colors.WHITE : Colors.BLACK;
  const inputBgColor = isLight
    ? Colors.ACTIVE_TAB_BACKGROUND
    : Colors.INACTIVE_TAB_BACKGROUND;

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

    ToastAndroid.show(Title.PROFILE_UPDATE_SUCCESSFULLY, ToastAndroid.SHORT);

    setTimeout(() => {
      navigation.navigate(ScreenRouteName.PROFILE);
    }, 1000);
  };

  return (
    <>
      <StatusBar />
      <ScrollViewContainer>
        <View>
          <Header back={true} header={ScreenTitle.PROFILE} Drawer={true} />
          <View className="flex items-center my-4">
            <Image source={require('../../assets/images/user.png')} />
          </View>

          <View>
            <View className="m-2">
              <Text style={[Typography.inputLabel, { color: labelColor }]}>
                {Title.NAME_LABEL}
              </Text>
              <TextInput
                value={userName}
                onChangeText={(e) => setUserName(e)}
                className="w-full p-3 rounded-2xl my-2"
                style={[
                  Typography.input,
                  { backgroundColor: inputBgColor, color: inputColor },
                ]}
              />
            </View>

            <View className="m-2">
              <Text style={[Typography.inputLabel, { color: labelColor }]}>
                {Title.EMAIL_LABEL}
              </Text>
              <TextInput
                value={user?.email || ''}
                editable={false}
                className="w-full p-3 rounded-2xl my-2"
                style={[
                  Typography.input,
                  { backgroundColor: inputBgColor, color: inputColor },
                ]}
              />
            </View>

            <View className="m-2">
              <Text style={[Typography.inputLabel, { color: labelColor }]}>
                {Title.AGE_LABEL}
              </Text>
              <TextInput
                value={age}
                onChangeText={(e) => setAge(e)}
                className="w-full p-3 rounded-2xl my-2"
                keyboardType="numeric"
                style={[
                  Typography.input,
                  { backgroundColor: inputBgColor, color: inputColor },
                ]}
              />
            </View>

            <View className="m-2">
              <Text style={[Typography.inputLabel, { color: labelColor }]}>
                {Title.NUMBER_LABEL}
              </Text>
              <TextInput
                value={userContact}
                onChangeText={(e) => setUserContact(e)}
                className="w-full p-3 rounded-2xl my-2"
                keyboardType="numeric"
                maxLength={10}
                style={[
                  Typography.input,
                  { backgroundColor: inputBgColor, color: inputColor },
                ]}
              />
            </View>

            <View className="m-2">
              <Text style={[Typography.inputLabel, { color: labelColor }]}>
                {Title.COUNTRY_LABEL}
              </Text>
              <TextInput
                value={country}
                onChangeText={(e) => setCountry(e)}
                className="w-full p-3 rounded-2xl my-2"
                style={[
                  Typography.input,
                  { backgroundColor: inputBgColor, color: inputColor },
                ]}
              />
            </View>

            <View className="m-2">
              <Text style={[Typography.inputLabel, { color: labelColor }]}>
                {Title.SOMETHING_EXTRA_LABEL}
              </Text>
              <TextInput
                value={quote}
                onChangeText={(e) => setQuote(e)}
                className="w-full p-3 rounded-2xl my-2"
                placeholder={Title.WRITE_SOMETHING}
                placeholderTextColor={isLight ? Colors.WHITE : Colors.BLACK}
                style={[
                  Typography.input,
                  { backgroundColor: inputBgColor, color: inputColor },
                ]}
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
              <Text className="text-white text-center" style={Typography.button}>
                {Title.SAVE}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollViewContainer>
    </>
  );
};

export default UpdateProfile;
