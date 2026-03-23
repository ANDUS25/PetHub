import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const ButtonContainer = ({data, containerStyle,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={containerStyle}>
        <Text>{data}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonContainer;
