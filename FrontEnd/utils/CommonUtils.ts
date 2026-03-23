import Colors from './Colors';
import { AppTheme } from './Strings';

const GlobalAppTheme = (
  theme: String,
  lightColor: String,
  darkColor: String,
) => {
  theme === AppTheme.LIGHT
    ? lightColor || Colors.BACKGROUND_MAIN_LIGHT
    : darkColor || Colors.BACKGROUND_MAIN_DARK;
};

export { GlobalAppTheme };
