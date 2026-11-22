import React, { useState } from 'react';
import { Dimensions, View } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import Header from '../../Container/Header';
import { useAppSelector } from '../../store/store';
import { GlobalAppTheme } from '../../utils/CommonUtils';
import { ScreenTitle, Title } from '../../utils/Strings';
import Calculator from './Tabs/Calculator';
import Policy from './Tabs/Policy';
import Register from './Tabs/Register';

const { width } = Dimensions.get('window');

const renderScene = SceneMap({
  first: Register,
  second: Policy,
  three: Calculator,
});

const FunNdEarn: React.FC = () => {
  const theme = useAppSelector((state) => state.ThemeReducer.value);

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: Title.REGISTER },
    { key: 'second', title: Title.POLICY },
    { key: 'three', title: Title.EARN_CALCULATOR },
  ]);

  return (
    <View
      style={{
        backgroundColor: GlobalAppTheme(theme),
        flex: 1,
      }}
    >
      <Header back={false} header={ScreenTitle.FUN_AND_EARN} Drawer={true} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width }}
      />
    </View>
  );
};

export default FunNdEarn;
