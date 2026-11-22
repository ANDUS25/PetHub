import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../Container/Header';
import services from '../../JSON/services.json';
import { useAppSelector } from '../../store/store';
import { FontFamily } from '../../theme/Typography';
import Colors from '../../utils/color';
import { GlobalAppTheme } from '../../utils/CommonUtils';
import { AppTheme, ScreenRouteName, ScreenTitle } from '../../utils/Strings';

const { height, width } = Dimensions.get('window');

interface ServiceItem {
  id?: number | string;
  serviceImage: string;
  serviceName?: string;
  [key: string]: any;
}

const LandingScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const theme = useAppSelector((state) => state.ThemeReducer.value);

  const handleServiceDetails = (item: ServiceItem) => {
    navigation.navigate(ScreenRouteName.SERVICES_DETAIL, item);
  };

  const renderItem: ListRenderItem<ServiceItem> = ({ item }) => (
    <TouchableOpacity onPress={() => handleServiceDetails(item)}>
      <View
        className="rounded-3xl my-5 justify-center items-center"
        style={{
          backgroundColor:
            theme === AppTheme.LIGHT ? Colors.INFO_DARK : Colors.INFO_LIGHT,
        }}
      >
        <Image
          source={{ uri: item.serviceImage }}
          style={{ height: height / 3, width: width - 10 }}
          className="rounded-3xl"
        />
        <View className="py-2">
          <Text
            className="text-2xl font-bold"
            style={{
              fontFamily: FontFamily.MULISH_BOLD,
              color:
                theme === AppTheme.LIGHT ? Colors.WHITE : Colors.TEXT_LIGHT_COLOR,
            }}
          >
            {item.serviceName}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      className="px-2 mb-16 flex-1"
      style={{ backgroundColor: GlobalAppTheme(theme) }}
    >
      <Header back={false} header={ScreenTitle.HOME} Drawer={true} />

      <FlatList
        data={services as ServiceItem[]}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default LandingScreen;
