import React from 'react';
import { Dimensions, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Colors from '../../utils/Colors';


const { width, height } = Dimensions.get('window');

const DropdownContainer = ({
  data,
  onChange,
  itemTextStyle,
  style,
  itemContainerStyle,
  containerStyle,
  placeholder,
  selectedTextStyle,
}) => {
  return (
    <View>
      <Dropdown
        data={data}
        placeholderStyle={{ color: Colors.BLACK }}
        placeholder={placeholder}
        labelField="label"
        valueField="value"
        style={{
          width: width - 20,
          padding: 10,
          borderRadius: 20,
          borderBottomWidth: 1,
          display: 'flex',
          alignSelf: 'center',
        }}
        selectedTextStyle={{ color: 'black', paddingHorizontal: 10 }}
        activeColor="#green"
        containerStyle={{
          backgroundColor: Colors.BACKGROUND_MAIN_LIGHT,
          borderRadius: 20,
          borderWidth: 0,
        }}
        itemContainerStyle={{
          borderWidth: 1,
          marginVertical: 1,
          backgroundColor: '#400092',
          borderRadius: 20,
        }}
        itemTextStyle={{
          color: '#fff',
        }}
        onChange={onChange}
        maxHeight={400}
      // mode={'modal'}
      />
    </View>
  );
};

export default DropdownContainer;
