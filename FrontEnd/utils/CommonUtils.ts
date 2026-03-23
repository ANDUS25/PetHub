import Colors from './Colors';
import { AppTheme } from './Strings';

const GlobalAppTheme = (
  theme: string,
  lightColor?: string,
  darkColor?: string,
): string => {
  return theme === AppTheme.LIGHT
    ? lightColor || Colors.BACKGROUND_MAIN_LIGHT
    : darkColor || Colors.BACKGROUND_MAIN_DARK;
};

export { GlobalAppTheme };
