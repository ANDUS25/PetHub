import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { ScrollViewContainer } from '../../Container';
import Header from '../../Container/Header';
import useAuth from '../../hooks/useAuth';
import { useAppSelector } from '../../store/store';
import { Typography } from '../../theme/Typography';
import Colors from '../../utils/color';
import { ScreenRouteName, ScreenTitle, Title } from '../../utils/Strings';

const Profile: React.FC = () => {
  const userUpdatedInfo = useAppSelector((state) => state.userSlice?.updateUser);
  const theme = useAppSelector((state) => state.ThemeReducer.value);
  const { user } = useAuth();
  const navigation = useNavigation<any>();

  const isLight = theme === 'light';
  const labelColor = isLight ? Colors.BLACK : Colors.WHITE;
  const valueColor = isLight ? Colors.WHITE : Colors.BLACK;
  const valueBgColor = isLight
    ? Colors.ACTIVE_TAB_BACKGROUND
    : Colors.INACTIVE_TAB_BACKGROUND;

  return (
    <>
      <StatusBar />
      <ScrollViewContainer>
        <View>
          <Header back={true} header={ScreenTitle.PROFILE} Drawer={true} />
          <View className="flex flex-col justify-center items-center">
            <Image source={require('../../assets/images/user.png')} />
            <View className="w-1/4 my-4">
              <TouchableOpacity
                onPress={() => navigation.navigate(ScreenRouteName.UPDATE_PROFILE)}
                className="bg-teal-800 p-5 rounded-xl"
              >
                <Text className="text-white text-center" style={Typography.button}>
                  {Title.UPDATE}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View className="m-2">
              <Text style={[Typography.inputLabel, { color: labelColor }]}>
                {Title.NAME_LABEL}
              </Text>
              <Text
                className="w-full p-3 rounded-2xl my-2"
                style={[
                  Typography.input,
                  { backgroundColor: valueBgColor, color: valueColor },
                ]}
              >
                {userUpdatedInfo?.Name || Title.NOT_AVAILABLE}
              </Text>
            </View>

            <View className="m-2">
              <Text style={[Typography.inputLabel, { color: labelColor }]}>
                {Title.EMAIL_LABEL}
              </Text>
              <Text
                className="w-full p-3 rounded-2xl my-2"
                style={[
                  Typography.input,
                  { backgroundColor: valueBgColor, color: valueColor },
                ]}
              >
                {user?.email || Title.NOT_AVAILABLE}
              </Text>
            </View>

            <View className="m-2">
              <Text style={[Typography.inputLabel, { color: labelColor }]}>
                {Title.AGE_LABEL}
              </Text>
              <Text
                className="w-full p-3 rounded-2xl my-2"
                style={[
                  Typography.input,
                  { backgroundColor: valueBgColor, color: valueColor },
                ]}
              >
                {userUpdatedInfo?.Age || Title.NOT_AVAILABLE}
              </Text>
            </View>

            <View className="m-2">
              <Text style={[Typography.inputLabel, { color: labelColor }]}>
                {Title.NUMBER_LABEL}
              </Text>
              <Text
                className="w-full p-3 rounded-2xl my-2"
                style={[
                  Typography.input,
                  { backgroundColor: valueBgColor, color: valueColor },
                ]}
              >
                {userUpdatedInfo?.Contact || Title.NOT_AVAILABLE}
              </Text>
            </View>

            <View className="m-2">
              <Text style={[Typography.inputLabel, { color: labelColor }]}>
                {Title.COUNTRY_LABEL}
              </Text>
              <Text
                className="w-full p-3 rounded-2xl my-2"
                style={[
                  Typography.input,
                  { backgroundColor: valueBgColor, color: valueColor },
                ]}
              >
                {userUpdatedInfo?.Country || Title.NOT_AVAILABLE}
              </Text>
            </View>

            <View className="m-2">
              <Text style={[Typography.inputLabel, { color: labelColor }]}>
                {Title.SOMETHING_EXTRA_LABEL}
              </Text>
              <Text
                className="w-full p-3 rounded-2xl my-2"
                style={[
                  Typography.input,
                  { backgroundColor: valueBgColor, color: valueColor },
                ]}
              >
                {userUpdatedInfo?.SomeThingExtra || Title.NOT_AVAILABLE}
              </Text>
            </View>
          </View>
        </View>
      </ScrollViewContainer>
    </>
  );
};

export default Profile;
