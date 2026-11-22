import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Bars3Icon, ChevronLeftIcon } from 'react-native-heroicons/outline';
import { useAppSelector } from '../store/store';
import Colors from '../utils/color';

interface HeaderProps {
  back?: boolean;
  header: string;
  Drawer?: boolean;
}

const Header: React.FC<HeaderProps> = ({ back, header, Drawer }) => {
  const theme = useAppSelector((state) => state.ThemeReducer.value);
  const navigation = useNavigation<any>();

  return (
    <View className="flex flex-row justify-between items-center py-4 mx-2">
      {back ? (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="rounded-md p-2"
          style={{
            backgroundColor:
              theme === 'light' ? Colors.BUTTON_DARK : Colors.INACTIVE_TAB_BACKGROUND,
          }}
        >
          <ChevronLeftIcon
            color={theme === 'light' ? Colors.WHITE : Colors.BLACK}
            size={28}
          />
        </TouchableOpacity>
      ) : (
        <View className="px-6" />
      )}

      <Text
        className="text-2xl"
        style={{
          color: theme === 'light' ? Colors.BLACK : Colors.WHITE,
        }}
      >
        {header}
      </Text>

      {Drawer ? (
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          className="rounded-md p-2"
          style={{
            backgroundColor:
              theme === 'light' ? Colors.BUTTON_DARK : Colors.INACTIVE_TAB_BACKGROUND,
          }}
        >
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
