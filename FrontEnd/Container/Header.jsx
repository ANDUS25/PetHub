import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Bars3Icon, ChevronLeftIcon } from 'react-native-heroicons/outline';
import { useSelector } from 'react-redux';
import Colors from '../utils/Colors';

const Header = ({ back, header, Drawer }) => {
  const theme = useSelector(state => state.ThemeReducer.value);
  const Navigation = useNavigation();

  return (
    <View className="flex flex-row justify-between items-center py-4 mx-2">
      {back ? (
        <TouchableOpacity
          onPress={() => Navigation.goBack()}
          className="rounded-md p-2"
          style={{
            backgroundColor: theme === 'light' ? Colors.BUTTON_DARK : '#B4D4FF',
          }}>
          <ChevronLeftIcon
            color={theme === 'light' ? Colors.WHITE : Colors.BLACK}
            size={28}
          />
        </TouchableOpacity>
      ) : (
        <View className="px-6"></View>
      )}

      <Text
        className="text-2xl"
        style={{
          color: theme === 'light' ? Colors.BLACK : Colors.WHITE,
        }}>
        {header}
      </Text>

      {Drawer ? (
        <TouchableOpacity
          onPress={() => Navigation.openDrawer()}
          className="rounded-md p-2"
          style={{
            backgroundColor: theme === 'light' ? Colors.BUTTON_DARK : '#B4D4FF',
          }}>
          <Bars3Icon
            color={theme === 'light' ? Colors.WHITE : Colors.BLACK}
            size={28}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Header;
