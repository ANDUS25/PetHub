import { StyleSheet, TextStyle } from 'react-native';
import Colors from '../utils/color';

// ==========================================
// 1. Font Families Available in App Assets
// ==========================================
export const FontFamily = {
  // Mulish Font Family
  MULISH_LIGHT: 'Mulish-Light',
  MULISH_LIGHT_ITALIC: 'Mulish-LightItalic',
  MULISH_REGULAR: 'Mulish-Regular',
  MULISH_MEDIUM: 'Mulish-Medium',
  MULISH_MEDIUM_ITALIC: 'Mulish-MediumItalic',
  MULISH_SEMIBOLD: 'Mulish-SemiBold',
  MULISH_SEMIBOLD_ITALIC: 'Mulish-SemiBoldItalic',
  MULISH_BOLD: 'Mulish-Bold',
  MULISH_EXTRA_BOLD: 'Mulish-ExtraBold',
  MULISH_BLACK: 'Mulish-Black',
  MULISH_ITALIC: 'Mulish-Italic',

  // Raleway Font Family
  RALEWAY_THIN: 'Raleway-Thin',
  RALEWAY_EXTRA_LIGHT: 'Raleway-ExtraLight',
  RALEWAY_LIGHT: 'Raleway-Light',
  RALEWAY_REGULAR: 'Raleway-Regular',
  RALEWAY_MEDIUM: 'Raleway-Medium',
  RALEWAY_MEDIUM_ITALIC: 'Raleway-MediumItalic',
  RALEWAY_SEMIBOLD: 'Raleway-SemiBold',
  RALEWAY_BOLD: 'Raleway-Bold',
  RALEWAY_EXTRA_BOLD: 'Raleway-ExtraBold',
  RALEWAY_BLACK: 'Raleway-Black',

  // Playfair Display Font Family
  PLAYFAIR_REGULAR: 'PlayfairDisplay-Regular',
  PLAYFAIR_MEDIUM: 'PlayfairDisplay-Medium',
  PLAYFAIR_SEMIBOLD: 'PlayfairDisplay-SemiBold',
  PLAYFAIR_BOLD: 'PlayfairDisplay-Bold',
} as const;

// ==========================================
// 2. Standard Font Sizes
// ==========================================
export const FontSize = {
  XS: 11,
  SM: 12,
  BASE: 13,
  MD: 14,
  LG: 16,
  XL: 18,
  XXL: 20,
  TITLE: 24,
  HEADER: 26,
  DISPLAY: 28,
  HERO: 32,
} as const;

// ==========================================
// 3. Pre-defined Typography Presets
// ==========================================
export const Typography = StyleSheet.create({
  // Headings
  hero: {
    fontFamily: FontFamily.MULISH_BOLD,
    fontSize: FontSize.HERO, // 32
  },
  display: {
    fontFamily: FontFamily.MULISH_BOLD,
    fontSize: FontSize.DISPLAY, // 28
  },
  header: {
    fontFamily: FontFamily.MULISH_BOLD,
    fontSize: FontSize.HEADER, // 26
  },
  title: {
    fontFamily: FontFamily.MULISH_BOLD,
    fontSize: FontSize.TITLE, // 24
  },
  sectionTitle: {
    fontFamily: FontFamily.MULISH_BOLD,
    fontSize: FontSize.XL, // 18
  },
  subheading: {
    fontFamily: FontFamily.MULISH_BOLD,
    fontSize: FontSize.LG, // 16
  },

  // Body
  bodyLarge: {
    fontFamily: FontFamily.MULISH_REGULAR,
    fontSize: FontSize.LG, // 16
    lineHeight: 24,
  },
  body: {
    fontFamily: FontFamily.MULISH_REGULAR,
    fontSize: FontSize.BASE, // 13
    lineHeight: 20,
  },
  bodyMedium: {
    fontFamily: FontFamily.MULISH_MEDIUM,
    fontSize: FontSize.MD, // 14
    lineHeight: 20,
  },
  bodyLight: {
    fontFamily: FontFamily.MULISH_LIGHT,
    fontSize: FontSize.BASE, // 13
    lineHeight: 18,
  },
  bodySmall: {
    fontFamily: FontFamily.MULISH_REGULAR,
    fontSize: FontSize.SM, // 12
    lineHeight: 16,
  },

  // Interactive / UI Elements
  badge: {
    fontFamily: FontFamily.MULISH_BOLD,
    fontSize: FontSize.SM, // 12
  },
  button: {
    fontFamily: FontFamily.MULISH_BOLD,
    fontSize: FontSize.MD, // 14
  },
  input: {
    fontFamily: FontFamily.MULISH_MEDIUM,
    fontSize: FontSize.XXL, // 20
  },
  inputLabel: {
    fontFamily: FontFamily.RALEWAY_REGULAR,
    fontSize: FontSize.XL, // 18
  },
  caption: {
    fontFamily: FontFamily.MULISH_REGULAR,
    fontSize: FontSize.XS, // 11
    lineHeight: 16,
  },
  captionBold: {
    fontFamily: FontFamily.MULISH_BOLD,
    fontSize: FontSize.XS, // 11
  },

  // Raleway Styled Text
  ralewayBold: {
    fontFamily: FontFamily.RALEWAY_BOLD,
    fontSize: FontSize.TITLE, // 24
  },
  ralewayMedium: {
    fontFamily: FontFamily.RALEWAY_MEDIUM,
    fontSize: FontSize.LG, // 16
  },
  ralewayItalic: {
    fontFamily: FontFamily.RALEWAY_MEDIUM_ITALIC,
    fontSize: FontSize.LG, // 16
  },
  ralewayLight: {
    fontFamily: FontFamily.RALEWAY_EXTRA_LIGHT,
    fontSize: FontSize.XL, // 18
  },
});

export type TypographyVariant = keyof typeof Typography;

// ==========================================
// 4. Theme-Aware Text Style Generator
// ==========================================
export const getThemedTypography = (
  theme: string,
  variant: TypographyVariant = 'body',
  customColor?: string,
): TextStyle => {
  const defaultColor =
    theme === 'light' ? Colors.BLACK : Colors.WHITE;

  return {
    ...Typography[variant],
    color: customColor || defaultColor,
  };
};

export default Typography;
