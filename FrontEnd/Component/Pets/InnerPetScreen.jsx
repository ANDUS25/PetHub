import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {HeaderContainer, ScrollViewContainer} from '../../Container';

const {height, width} = Dimensions.get('window');

const InnerPetScreen = ({route}) => {
  const petProducts = route.params.petProducts;
  const petAllInfo = route.params.i;

  const theme = useSelector(state => state.ThemeReducer.value);

  return (
    <ScrollViewContainer>
      <HeaderContainer back={true} header={'Pet Details'} Drawer={true} />

      <View className="my-4">
        <Image
          source={{uri: petAllInfo?.item?.image}}
          style={{width, height: 350}}
          className="rounded-xl"
        />
        <Text
          className="text-center underline underline-offset-2 my-3"
          style={[styles(theme).text, {fontSize: 25}]}>
          {petAllInfo?.item?.petName}
        </Text>
        <View>
          <View className="flex flex-row items-center">
            <Text className="text-lg font-bold" style={styles(theme).text}>
              Colors:-
            </Text>
            <Text className="flex flex-row w-80 ml-2">
              {petAllInfo?.item?.color?.map((i, index) => {
                return (
                  <Text style={styles(theme).text} key={index}>
                    {petAllInfo?.item.color.lastIndexOf(i) ===
                    petAllInfo?.item.color.length - 1
                      ? `${i}`
                      : `${i}, `}
                  </Text>
                );
              })}
            </Text>
          </View>

          <View className="flex flex-row items-center my-2">
            <Text className="text-lg font-bold" style={styles(theme).text}>
              Total Life Span:-
            </Text>
            <Text style={styles(theme).text} className="ml-2">
              {petAllInfo?.item?.Lifespan}
            </Text>
          </View>

          <View className="flex flex-row items-center my-2">
            <Text className="text-lg font-bold" style={styles(theme).text}>
              Food:-
            </Text>
            <Text>
              {petProducts.map((i, index) => {
                return (
                  <Text style={styles(theme).text} key={index} className="ml-2">
                    {` ${i.items}`}
                  </Text>
                );
              })}
            </Text>
          </View>

          <View className="my-3">
            <Text
              className="text-lg text-justify font-bold"
              style={styles(theme).text}>
              Info:-{' '}
              <Text style={styles(theme).text}>{petAllInfo?.item.info}</Text>
            </Text>
          </View>

          <View className="my-3">
            <Text
              className="text-lg text-justify font-bold"
              style={styles(theme).text}>
              Facts:-{' '}
              <Text style={styles(theme).text}>{petAllInfo?.item.Facts}</Text>
            </Text>
          </View>
        </View>

        <View>
          <Text className="text-lg font-bold" style={styles(theme).text}>
            Collection:-
          </Text>
          <View className="flex-row flex-wrap justify-center">
            {petAllInfo?.item.collection.map((i, index) => {
              return (
                <Image
                  source={{uri: i.path}}
                  style={{
                    width: 172,
                    height: 250,
                  }}
                  className="m-2 rounded-2xl"
                  resizeMode="cover"
                  key={index}
                />
              );
            })}
          </View>
        </View>
      </View>
    </ScrollViewContainer>
  );
};

export default InnerPetScreen;

const styles = theme =>
  StyleSheet.create({
    text: {
      color: theme === 'light' ? '#000' : '#fff',
      fontSize: 17,
      fontFamily: 'Mulish-Medium',
    },
  });
