import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import { useAppSelector } from '../../store/store';
import { Typography, TypographyVariant } from '../../theme/Typography';
import Colors from '../../utils/color';

export interface AppTextProps extends TextProps {
  variant?: TypographyVariant;
  color?: string;
  children?: React.ReactNode;
}

export const AppText: React.FC<AppTextProps> = ({
  variant = 'body',
  color,
  style,
  children,
  ...props
}) => {
  const theme = useAppSelector((state) => state.ThemeReducer.value);

  const defaultColor =
    theme === 'light' ? Colors.BLACK : Colors.WHITE;

  const textStyle: TextStyle = {
    ...Typography[variant],
    color: color || defaultColor,
  };

  return (
    <Text style={[textStyle, style]} {...props}>
      {children}
    </Text>
  );
};

export default AppText;
