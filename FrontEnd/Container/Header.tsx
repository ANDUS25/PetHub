import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Bars3Icon, ChevronLeftIcon } from 'react-native-heroicons/outline';
import { useSelector } from 'react-redux';
import Colors from '../utils/Colors';
import { GlobalAppTheme } from '../utils/CommonUtils';
import { HeaderProps } from '../utils/Interface';

const Header: FC<HeaderProps> = ({ back, header, Drawer }) => {
  const theme = useSelector(state => state.ThemeReducer.value);
  const Navigation = useNavigation();

  return (
    <View className="flex flex-row justify-between items-center py-4 mx-2">
      {back ? (
        <TouchableOpacity
          onPress={() => Navigation.goBack()}
          className="rounded-md p-2"
          style={{
            backgroundColor: GlobalAppTheme(
              theme,
              Colors.BUTTON_DARK,
              Colors.INACTIVE_TAB_BACKGROUND,
            ),
          }}
        >
          <ChevronLeftIcon
            color={GlobalAppTheme(theme, Colors.WHITE, Colors.BLACK)}
            size={28}
          />
        </TouchableOpacity>
      ) : (
        <View className="px-6"></View>
      )}

      <Text
        className="text-2xl"
        style={{
          color: GlobalAppTheme(theme, Colors.BLACK, Colors.WHITE),
        }}
      >
        {header}
      </Text>

      {Drawer ? (
        <TouchableOpacity
          onPress={() => Navigation.openDrawer()}
          className="rounded-md p-2"
          style={{
            backgroundColor: GlobalAppTheme(
              theme,
              Colors.BUTTON_DARK,
              Colors.INACTIVE_TAB_BACKGROUND,
            ),
          }}
        >
          <Bars3Icon
            color={GlobalAppTheme(theme, Colors.WHITE, Colors.BLACK)}
            size={28}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Header;
