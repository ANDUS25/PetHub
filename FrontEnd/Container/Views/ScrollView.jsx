import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Colors from '../../utils/Colors';

const ScrollViewContainer = ({ children }) => {
  const theme = useSelector(state => state.ThemeReducer.value);
  1;
  return (
    <ScrollView
      className="px-2 flex-1"
      style={{
        backgroundColor:
          theme === 'light'
            ? Colors.BACKGROUND_MAIN_LIGHT
            : Colors.BACKGROUND_MAIN_DARK,
      }}>
      {children}
    </ScrollView>
  );
};

export default ScrollViewContainer;
