import React from 'react';
import { ScrollView, View } from 'react-native';
import { HeaderContainer } from '../../Container';
import { useAppSelector } from '../../store/store';
import { GlobalAppTheme } from '../../utils/CommonUtils';
import { Title } from '../../utils/Strings';
import ProductItem from './Product';

const ECommerce: React.FC = () => {
  const theme = useAppSelector((state) => state.ThemeReducer.value);

  return (
    <ScrollView
      className="px-2 flex-1"
      style={{ backgroundColor: GlobalAppTheme(theme) }}
    >
      <HeaderContainer back={true} header={Title.PRODUCTS} Drawer={true} />
      <View>
        <ProductItem Header={Title.FOOD} />
        <ProductItem Header={Title.BED} />
        <ProductItem Header={Title.Accessories} />
      </View>
    </ScrollView>
  );
};

export default ECommerce;
