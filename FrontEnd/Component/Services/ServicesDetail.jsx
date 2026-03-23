import React from 'react';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../../Container/Header';
import Colors from '../../utils/Colors';
import { GlobalAppTheme } from '../../utils/CommonUtils';

const { height, width } = Dimensions.get('window');

const ServicesDetail = ({ route }) => {
  let data = route?.params;

  const theme = useSelector(state => state?.ThemeReducer?.value);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: GlobalAppTheme(theme) }}>
      <View className="mx-2">
        <Header back={true} header={'Details'} Drawer={true} />
        <Image
          source={{ uri: data.serviceImage }}
          style={{ height: height / 3, width: width - 50 }}
          resizeMode="cover"
          className="p-2 mx-auto rounded-3xl"
        />
        <Text
          style={{ color: GlobalAppTheme(theme, Colors.BLACK, Colors.WHITE) }}
          className="text-xl my-4 mx-auto">
          What actually{' '}
          <Text style={{ fontFamily: 'Mulish-Italic' }}>{data.serviceName} </Text>
          is ?
        </Text>
        {data?.servicesInDepth?.map((item, index) => {
          return (
            <Text
              className="my-2 text-justify px-4"
              style={{
                color: GlobalAppTheme(theme, Colors.BLACK, Colors.WHITE), fontSize: 16
              }}
              key={index}>
              <Text
                className="text-sm font-bold "
                style={{ fontFamily: 'Mulish-SemiBoldItalic', fontSize: 17 }}>
                {Object.keys(item)}
              </Text>
              : {Object.values(item)}
            </Text>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default ServicesDetail;
