import React from 'react';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import Header from '../../Container/Header';
import { useAppSelector } from '../../store/store';
import { FontFamily, FontSize } from '../../theme/Typography';
import Colors from '../../utils/color';
import { GlobalAppTheme } from '../../utils/CommonUtils';
import { Title } from '../../utils/Strings';

const { height, width } = Dimensions.get('window');

interface ServicesDetailProps {
  route?: {
    params?: {
      serviceImage?: string;
      serviceName?: string;
      servicesInDepth?: Record<string, string>[];
      [key: string]: any;
    };
  };
}

const ServicesDetail: React.FC<ServicesDetailProps> = ({ route }) => {
  const data = route?.params;
  const theme = useAppSelector((state) => state?.ThemeReducer?.value);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: GlobalAppTheme(theme) }}
    >
      <View className="mx-2">
        <Header back={true} header={Title.DETAILS} Drawer={true} />
        <Image
          source={{ uri: data?.serviceImage }}
          style={{ height: height / 3, width: width - 50 }}
          resizeMode="cover"
          className="p-2 mx-auto rounded-3xl"
        />
        <Text
          style={{ color: GlobalAppTheme(theme, Colors.BLACK, Colors.WHITE) }}
          className="text-xl my-4 mx-auto"
        >
          What actually{' '}
          <Text style={{ fontFamily: FontFamily.MULISH_ITALIC }}>
            {data?.serviceName}{' '}
          </Text>
          is ?
        </Text>
        {data?.servicesInDepth?.map((item, index) => (
          <Text
            className="my-2 text-justify px-4"
            style={{
              color: GlobalAppTheme(theme, Colors.BLACK, Colors.WHITE),
              fontSize: FontSize.LG,
            }}
            key={index}
          >
            <Text
              className="text-sm font-bold"
              style={{
                fontFamily: FontFamily.MULISH_SEMIBOLD_ITALIC,
                fontSize: FontSize.XL - 1,
              }}
            >
              {Object.keys(item)[0]}
            </Text>
            : {Object.values(item)[0]}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default ServicesDetail;
