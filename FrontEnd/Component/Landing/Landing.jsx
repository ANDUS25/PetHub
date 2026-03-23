import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../../Container/Header';
import services from '../../JSON/services.json';
import Colors from '../../utils/Colors';
import { GlobalAppTheme } from '../../utils/CommonUtils';
import { AppTheme, ScreenRouteName } from '../../utils/Strings';

const { height, width } = Dimensions.get('window');

const LandingScreen = () => {
  const Navigation = useNavigation();

  const theme = useSelector(state => state.ThemeReducer.value);

  const handleServiceDetails = item => {
    Navigation.navigate(ScreenRouteName.SERVICES_DETAIL, item);
  };

  return (
    <>
      <View
        className="px-2 mb-16"
        style={{ backgroundColor: GlobalAppTheme(theme) }}>
        <Header back={false} header={'Home'} Drawer={true} />

        <FlatList
          data={services}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={item => (
            <TouchableOpacity onPress={() => handleServiceDetails(item?.item)}>
              <View
                className="rounded-3xl my-5 justify-center items-center"
                style={{
                  backgroundColor:
                    theme === AppTheme.LIGHT ? Colors.INFO_DARK : Colors.INFO_LIGHT,
                }}>
                <Image
                  source={{ uri: item?.item.serviceImage }}
                  style={{ height: height / 3, width: width - 10 }}
                  className="rounded-t-3xl"
                />
                <Text
                  className="text-xl my-2"
                  style={{
                    color: Colors.WHITE,
                    fontFamily: 'Mulish-SemiBoldItalic',
                  }}>
                  {item?.item.serviceName}
                </Text>
                <Text
                  className="text-sm p-3 text-justify"
                  style={{
                    color: Colors.WHITE,
                    fontFamily: 'Mulish-Medium',
                  }}>
                  {item?.item.serviceDetails <= 150
                    ? item?.item.serviceDetails
                    : `${item?.item.serviceDetails.slice(0, 150)}...`}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};

export default LandingScreen;
