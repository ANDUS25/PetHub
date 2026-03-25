import React, { FC } from 'react';
import { TextInput } from 'react-native';
import { TextInputContainerProps } from '../../utils/Interface';

const TextInputContainer: FC<TextInputContainerProps> = ({ ...props }) => {
  const { placeholder, TextChange, style, className, placeHolderColor } = props;

  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={TextChange}
      style={style}
      className={className}
      placeholderTextColor={placeHolderColor}
    />
  );
};

export default TextInputContainer;
