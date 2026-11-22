import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { HeaderContainer, ScrollViewContainer } from '../../Container';
import { useAppSelector } from '../../store/store';
import { FontFamily, FontSize } from '../../theme/Typography';
import Colors from '../../utils/color';
import { Title } from '../../utils/Strings';

const { width } = Dimensions.get('window');

interface InnerPetScreenProps {
  route?: {
    params?: {
      petProducts?: any[];
      i?: {
        item?: {
          petName?: string;
          image?: string;
          color?: string[];
          Lifespan?: string;
          info?: string;
          Facts?: string;
          collection?: { path: string }[];
          [key: string]: any;
        };
      };
    };
  };
}

const InnerPetScreen: React.FC<InnerPetScreenProps> = ({ route }) => {
  const petProducts = route?.params?.petProducts || [];
  const petAllInfo = route?.params?.i;

  const theme = useAppSelector((state) => state.ThemeReducer.value);

  return (
    <ScrollViewContainer>
      <HeaderContainer back={true} header={Title.PET_DETAILS} Drawer={true} />

      <View className="my-4">
        <Image
          source={{ uri: petAllInfo?.item?.image }}
          style={{ width: width - 20, height: 350, alignSelf: 'center' }}
          className="rounded-xl"
        />
        <Text
          className="text-center underline underline-offset-2 my-3"
          style={[styles(theme).text, { fontSize: 25 }]}
        >
          {petAllInfo?.item?.petName}
        </Text>
        <View>
          {petAllInfo?.item?.color && (
            <View className="flex flex-row items-center">
              <Text className="text-lg font-bold" style={styles(theme).text}>
                {Title.COLORS_LABEL}
              </Text>
              <Text className="flex flex-row w-80 ml-2">
                {petAllInfo?.item?.color?.map((colorItem, index) => (
                  <Text style={styles(theme).text} key={index}>
                    {index === (petAllInfo?.item?.color?.length || 0) - 1
                      ? `${colorItem}`
                      : `${colorItem}, `}
                  </Text>
                ))}
              </Text>
            </View>
          )}

          <View className="flex flex-row items-center my-2">
            <Text className="text-lg font-bold" style={styles(theme).text}>
              {Title.TOTAL_LIFESPAN_LABEL}
            </Text>
            <Text style={styles(theme).text} className="ml-2">
              {petAllInfo?.item?.Lifespan}
            </Text>
          </View>

          <View className="flex flex-row items-center my-2">
            <Text className="text-lg font-bold" style={styles(theme).text}>
              {Title.FOOD_LABEL}
            </Text>
            <Text>
              {petProducts.map((prod, index) => (
                <Text style={styles(theme).text} key={index} className="ml-2">
                  {` ${prod.items}`}
                </Text>
              ))}
            </Text>
          </View>

          <View className="my-3">
            <Text
              className="text-lg text-justify font-bold"
              style={styles(theme).text}
            >
              {Title.INFO_LABEL}
              <Text style={styles(theme).text}>{petAllInfo?.item?.info}</Text>
            </Text>
          </View>

          <View className="my-3">
            <Text
              className="text-lg text-justify font-bold"
              style={styles(theme).text}
            >
              {Title.FACTS_LABEL}
              <Text style={styles(theme).text}>{petAllInfo?.item?.Facts}</Text>
            </Text>
          </View>
        </View>

        {petAllInfo?.item?.collection && (
          <View>
            <Text className="text-lg font-bold" style={styles(theme).text}>
              {Title.COLLECTION_LABEL}
            </Text>
            <View className="flex-row flex-wrap justify-center">
              {petAllInfo.item.collection.map((col, index) => (
                <Image
                  source={{ uri: col.path }}
                  style={{
                    width: 172,
                    height: 250,
                  }}
                  className="m-2 rounded-2xl"
                  resizeMode="cover"
                  key={index}
                />
              ))}
            </View>
          </View>
        )}
      </View>
    </ScrollViewContainer>
  );
};

export default InnerPetScreen;

const styles = (theme: string) =>
  StyleSheet.create({
    text: {
      color: theme === 'light' ? Colors.BLACK : Colors.WHITE,
      fontSize: FontSize.XL - 1, // 17
      fontFamily: FontFamily.MULISH_MEDIUM,
    },
  });
