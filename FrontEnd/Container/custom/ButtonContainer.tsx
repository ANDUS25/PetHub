import { View, Text, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';

interface ButtonContainerInterface {
  data: string;
  containerStyle: any;
  onPress: () => void;
}

const ButtonContainer: FC<ButtonContainerInterface> = ({ ...props }) => {
  const { containerStyle, data, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={containerStyle}>
        <Text>{data}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonContainer;
