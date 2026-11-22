import Colors from './color';
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

const globalAppBlackAndWhiteTheme = (theme: string) => {
  return theme === AppTheme.LIGHT ? Colors.BLACK : Colors.WHITE;
};

const globalAppActiveTheme = (theme: string) => {
  return theme === AppTheme.LIGHT
    ? Colors.ACTIVE_TAB_BACKGROUND
    : Colors.INACTIVE_TAB_BACKGROUND;
};

export { GlobalAppTheme, globalAppBlackAndWhiteTheme, globalAppActiveTheme };
