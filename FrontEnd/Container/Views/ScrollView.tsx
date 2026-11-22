import React, { ReactNode } from 'react';
import { ScrollView } from 'react-native';
import { useAppSelector } from '../../store/store';
import Colors from '../../utils/color';

interface ScrollViewContainerProps {
  children: ReactNode;
}

const ScrollViewContainer: React.FC<ScrollViewContainerProps> = ({ children }) => {
  const theme = useAppSelector((state) => state.ThemeReducer.value);

  return (
    <ScrollView
      className="px-2 flex-1"
      style={{
        backgroundColor:
          theme === 'light'
            ? Colors.BACKGROUND_MAIN_LIGHT
            : Colors.BACKGROUND_MAIN_DARK,
      }}
    >
      {children}
    </ScrollView>
  );
};

export default ScrollViewContainer;
