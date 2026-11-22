import React from 'react';
import { Dimensions, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Colors from '../../utils/color';

const { width } = Dimensions.get('window');

interface DropdownContainerInterface {
  data: any[];
  onChange?: (item: any) => void;
  itemTextStyle?: any;
  style?: any;
  itemContainerStyle?: any;
  containerStyle?: any;
  placeholder?: string;
  selectedTextStyle?: any;
}

const DropdownContainer: React.FC<DropdownContainerInterface> = ({
  data = [],
  placeholder = '',
  onChange = () => {},
  style,
  containerStyle,
  itemContainerStyle,
  itemTextStyle,
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
        style={[
          {
            width: width - 20,
            padding: 10,
            borderRadius: 20,
            borderBottomWidth: 1,
            display: 'flex',
            alignSelf: 'center',
          },
          style,
        ]}
        selectedTextStyle={[
          { color: Colors.BLACK, paddingHorizontal: 10 },
          selectedTextStyle,
        ]}
        activeColor={Colors.ACTIVE_GREEN}
        containerStyle={[
          {
            backgroundColor: Colors.BACKGROUND_MAIN_LIGHT,
            borderRadius: 20,
            borderWidth: 0,
          },
          containerStyle,
        ]}
        itemContainerStyle={[
          {
            borderWidth: 1,
            marginVertical: 1,
            backgroundColor: Colors.PURPLE_ACCENT,
            borderRadius: 20,
          },
          itemContainerStyle,
        ]}
        itemTextStyle={[
          {
            color: Colors.WHITE,
          },
          itemTextStyle,
        ]}
        onChange={onChange}
        maxHeight={400}
      />
    </View>
  );
};

export default DropdownContainer;
