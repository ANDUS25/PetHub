import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../../Container/Header';
import { GlobalAppTheme } from '../../utils/CommonUtils';

const Doctor = () => {
  const theme = useSelector(state => state.ThemeReducer.value);
  return (
    <View
      className="px-2"
      style={{
        backgroundColor: GlobalAppTheme(theme),
        flex: 1,
      }}
    >
      <Header back={false} header={'Doctor'} Drawer={true} />

      <View>
        <Text style={{ textAlign: 'center' }} className="text-2xl">
          {Title.VETERAN}
        </Text>
        <Text style={{ textAlign: 'center' }} className="text-lg">
          {Title.FIND_NEAR_BY_DAY_CARE}
        </Text>
      </View>
    </View>
  );
};

export default Doctor;
