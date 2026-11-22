import React from 'react';
import { Text, View } from 'react-native';
import Header from '../../Container/Header';
import { useAppSelector } from '../../store/store';
import { GlobalAppTheme } from '../../utils/CommonUtils';
import { Title } from '../../utils/Strings';

const Doctor: React.FC = () => {
  const theme = useAppSelector((state) => state.ThemeReducer.value);

  return (
    <View
      className="px-2"
      style={{
        backgroundColor: GlobalAppTheme(theme),
        flex: 1,
      }}
    >
      <Header back={false} header={Title.VETERAN} Drawer={true} />

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
