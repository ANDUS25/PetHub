import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ScrollViewContainer } from '../../Container';
import Header from '../../Container/Header';
import UseAuth from '../../hooks/useAuth';
import Colors from '../../utils/Colors';


const Profile = () => {
  const userUpdatedInfo = useSelector(state => state.userSlice.updateUser);
  const theme = useSelector(state => state.ThemeReducer.value);
  const { user } = UseAuth();
  const Navigation = useNavigation();

  return (
    <>
      <StatusBar />
      <ScrollViewContainer>
        <View>
          <Header back={true} header={'Profile'} Drawer={true} />
          <View className="flex flex-col justify-center items-center">
            <Image source={require('../../assets/images/user.png')} />
            <View className="w-1/4  my-4">
              <TouchableOpacity
                onPress={() => Navigation.navigate('UpdateProfile')}
                className="bg-teal-800 p-5 rounded-xl ">
                <Text className="text-white text-center">Update</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View className="m-2">
              <Text
                style={{
                  color: theme === 'light' ? Colors.BLACK : Colors.WHITE,
                  fontFamily: 'Raleway-Regular',
                  fontSize: 18,
                }}>
                Name:-
              </Text>
              <Text
                className="w-full p-3 rounded-2xl my-2"
                style={{
                  backgroundColor: theme === 'light' ? '#201658' : '#B4D4FF',
                  color: theme === 'light' ? Colors.WHITE : Colors.BLACK,
                  fontFamily: 'Mulish-Medium',
                  fontSize: 20,
                }}>
                {userUpdatedInfo?.Name}
              </Text>
            </View>
            <View className="m-2">
              <Text
                style={{
                  color: theme === 'light' ? Colors.BLACK : Colors.WHITE,
                  fontFamily: 'Raleway-Regular',
                  fontSize: 18,
                }}>
                Email:-
              </Text>
              <Text
                className="w-full p-3 rounded-2xl my-2"
                style={{
                  backgroundColor: theme === 'light' ? '#201658' : '#B4D4FF',
                  color: theme === 'light' ? '#fff' : '#000',
                  fontFamily: 'Mulish-Medium',
                  fontSize: 20,
                }}>
                {user?.email}
              </Text>
            </View>

            <View className="m-2">
              <Text
                style={{
                  color: theme === 'light' ? Colors.BLACK : Colors.WHITE,
                  fontFamily: 'Raleway-Regular',
                  fontSize: 18,
                }}>
                Age:-
              </Text>
              <Text
                className="w-full p-3 rounded-2xl my-2"
                style={{
                  backgroundColor: theme === 'light' ? '#201658' : '#B4D4FF',
                  color: theme === 'light' ? '#fff' : '#000',
                  fontFamily: 'Mulish-Medium',
                  fontSize: 20,
                }}>
                {userUpdatedInfo?.Age}
              </Text>
            </View>

            <View className="m-2">
              <Text
                style={{
                  color: theme === 'light' ? Colors.BLACK : Colors.WHITE,
                  fontFamily: 'Raleway-Regular',
                  fontSize: 18,
                }}>
                Number:-
              </Text>
              <Text
                className="w-full p-3 rounded-2xl my-2"
                style={{
                  backgroundColor: theme === 'light' ? '#201658' : '#B4D4FF',
                  color: theme === 'light' ? '#fff' : '#000',
                  fontFamily: 'Mulish-Medium',
                  fontSize: 20,
                }}>
                {userUpdatedInfo?.Contact}
              </Text>
            </View>

            <View className="m-2">
              <Text
                style={{
                  color: theme === 'light' ? Colors.BLACK : Colors.WHITE,
                  fontFamily: 'Raleway-Regular',
                  fontSize: 18,
                }}>
                Country:-
              </Text>
              <Text
                className="w-full p-3 rounded-2xl my-2"
                style={{
                  backgroundColor: theme === 'light' ? '#201658' : '#B4D4FF',
                  color: theme === 'light' ? '#fff' : '#000',
                  fontFamily: 'Mulish-Medium',
                  fontSize: 20,
                }}>
                {userUpdatedInfo?.Country}
              </Text>
            </View>

            <View className="m-2">
              <Text
                style={{
                  color: theme === 'light' ? Colors.BLACK : Colors.WHITE,
                  fontFamily: 'Raleway-Regular',
                  fontSize: 18,
                }}>
                Something Extra !
              </Text>
              <Text
                className="w-full p-3 rounded-2xl my-2"
                style={{
                  backgroundColor: theme === 'light' ? '#201658' : '#B4D4FF',
                  color: theme === 'light' ? '#fff' : '#000',
                  fontFamily: 'Mulish-Medium',
                  fontSize: 20,
                }}>
                {userUpdatedInfo?.SomeThingExtra}
              </Text>
            </View>
          </View>
        </View>
      </ScrollViewContainer>
    </>
  );
};

export default Profile;
