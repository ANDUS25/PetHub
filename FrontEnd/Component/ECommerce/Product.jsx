import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import Products from '../../JSON/products.json';
import Colors from '../../utils/Colors';

const ProductItem = ({ Header }) => {
  const Navigation = useNavigation();
  const [productInfo, setProductInfo] = useState();
  const theme = useSelector(state => state.ThemeReducer.value);

  const petInfoFetch = () => {
    const pro = Products.filter(i => i.Headline === Header).flatMap(
      i => i.item,
    );
    setProductInfo(pro);
  };

  useEffect(() => {
    petInfoFetch();
  }, []);

  return (
    <View className="flex-1 flex-col my-3">
      <Text
        className="text-2xl ml-2"
        style={{
          color: theme === 'light' ? Colors.BLACK : Colors.WHITE,
          fontFamily: 'Mulish-Medium',
        }}>
        {Header}
      </Text>

      <FlatList
        data={productInfo}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={(item, index) => (
          <TouchableOpacity
            onPress={() => Navigation.navigate('InnerProduct', item?.item)}
            key={index}>
            <View
              key={index}
              className="rounded-2xl m-1 p-4"
              style={{
                backgroundColor:
                  theme === 'light' ? Colors.INFO_DARK : Colors.INFO_LIGHT,
              }}>
              <Image
                source={{ uri: item?.item?.Image }}
                style={{ width: 200, height: 200 }}
                className="rounded-2xl"
              />
              <View className="my-2">
                <Text
                  className="text-xl"
                  style={{
                    fontFamily: 'Mulish-Light',
                    color: Colors.WHITE,
                  }}>
                  {item?.item.Name}
                </Text>
              </View>
              <View className="flex flex-row justify-between items-center">
                <Text
                  style={{
                    fontFamily: 'Mulish-Light',
                    color: Colors.WHITE,
                  }}>
                  {item?.item.CompanyName}
                </Text>
                {item?.item?.Offer && (
                  <Text className="bg-green-400 px-4">{item?.item?.Offer}</Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductItem;
