import React, { FC } from 'react';
import { TextInput } from 'react-native';
import { TextInputContainer as TextInputContainerType } from '../../utils/Interface';

const TextInputContainer: FC<TextInputContainerType> = ({ ...props }) => {
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
