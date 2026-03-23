import React from "react";
import { TextInput } from "react-native";

const TextInputContainer = ({
  placeholder,
  TextChange,
  style,
  className,
  placeHolderColor,
}) => {
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
