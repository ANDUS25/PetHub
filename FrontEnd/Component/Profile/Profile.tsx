import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { ScrollViewContainer } from '../../Container';
import Header from '../../Container/Header';
import useAuth from '../../hooks/useAuth';
import { useAppSelector } from '../../store/store';
import Colors from '../../utils/color';

const Profile: React.FC = () => {
  const userUpdatedInfo = useAppSelector((state) => state.userSlice?.updateUser);
  const theme = useAppSelector((state) => state.ThemeReducer.value);
  const { user } = useAuth();
  const navigation = useNavigation<any>();

  return (
    <>
      <StatusBar />
      <ScrollViewContainer>
        <View>
          <Header back={true} header={'Profile'} Drawer={true} />
          <View className="flex flex-col justify-center items-center">
            <Image source={require('../../assets/images/user.png')} />
            <View className="w-1/4 my-4">
              <TouchableOpacity
                onPress={() => navigation.navigate('UpdateProfile')}
                className="bg-teal-800 p-5 rounded-xl"
              >
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
                }}
              >
                Name:-
              </Text>
              <Text
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
              >
                {userUpdatedInfo?.Name || 'N/A'}
              </Text>
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
              <Text
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
              >
                {user?.email || 'N/A'}
              </Text>
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
              <Text
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
              >
                {userUpdatedInfo?.Age || 'N/A'}
              </Text>
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
              <Text
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
              >
                {userUpdatedInfo?.Contact || 'N/A'}
              </Text>
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
              <Text
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
              >
                {userUpdatedInfo?.Country || 'N/A'}
              </Text>
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
              <Text
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
              >
                {userUpdatedInfo?.SomeThingExtra || 'N/A'}
              </Text>
            </View>
          </View>
        </View>
      </ScrollViewContainer>
    </>
  );
};

export default Profile;
