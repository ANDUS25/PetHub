import React from 'react';
import { Dimensions, View } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import { useSelector } from 'react-redux';
import Header from '../../Container/Header';
import { GlobalAppTheme } from '../../utils/CommonUtils';
import Calculator from './Tabs/Calculator';
import Policy from './Tabs/Policy';
import Register from './Tabs/Register';

const { width, height } = Dimensions.get('window');

const renderScene = SceneMap({
  first: () => <Register />,
  second: () => <Policy />,
  three: () => <Calculator />,
});

const FunNdEarn = () => {
  const theme = useSelector(state => state.ThemeReducer.value);

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Register' },
    { key: 'second', title: 'Policy' },
    { key: 'three', title: 'Earn Calculator' },
  ]);
  return (
    <View
      style={{
        backgroundColor: GlobalAppTheme(theme),
        flex: 1,
      }}
    >
      <Header back={false} header={'Fun & Earn'} Drawer={true} />
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
