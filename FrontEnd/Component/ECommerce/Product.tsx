import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import Products from '../../JSON/products.json';
import { useAppSelector } from '../../store/store';
import { FontFamily } from '../../theme/Typography';
import Colors from '../../utils/color';
import { ScreenRouteName } from '../../utils/Strings';

interface ProductItemProps {
  Header: string;
}

interface ProductEntry {
  id?: string | number;
  Name: string;
  CompanyName?: string;
  Image?: string;
  Price?: number | string;
  Offer?: string;
  [key: string]: any;
}

const ProductItem: React.FC<ProductItemProps> = ({ Header }) => {
  const navigation = useNavigation<any>();
  const [productInfo, setProductInfo] = useState<ProductEntry[]>([]);
  const theme = useAppSelector((state) => state.ThemeReducer.value);

  const petInfoFetch = () => {
    const pro = Products.filter((i) => i.Headline === Header).flatMap(
      (i) => i.item,
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
          fontFamily: FontFamily.MULISH_MEDIUM,
        }}
      >
        {Header}
      </Text>

      <FlatList
        data={productInfo}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(ScreenRouteName.INNER_PRODUCT, item)}
          >
            <View
              className="rounded-2xl m-1 p-4"
              style={{
                backgroundColor:
                  theme === 'light' ? Colors.INFO_DARK : Colors.INFO_LIGHT,
              }}
            >
              <Image
                source={{ uri: item.Image }}
                style={{ width: 200, height: 200 }}
                className="rounded-2xl"
              />
              <View className="my-2">
                <Text
                  className="text-xl"
                  style={{
                    fontFamily: FontFamily.MULISH_LIGHT,
                    color: Colors.WHITE,
                  }}
                >
                  {item.Name}
                </Text>
              </View>
              <View className="flex flex-row justify-between items-center">
                <Text
                  style={{
                    fontFamily: FontFamily.MULISH_LIGHT,
                    color: Colors.WHITE,
                  }}
                >
                  {item.CompanyName}
                </Text>
                {item.Offer && (
                  <Text className="bg-green-400 px-4">{item.Offer}</Text>
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
