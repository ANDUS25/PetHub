import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import { HeaderContainer, ScrollViewContainer } from '../../Container';
import { addProduct } from '../../store/Slices/CartSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { FontFamily, FontSize } from '../../theme/Typography';
import Colors from '../../utils/color';
import { Title } from '../../utils/Strings';

const { width } = Dimensions.get('screen');

interface PackageSize {
  Package: string;
}

interface ProductDetails {
  Name: string;
  Price: number | string;
  Quantity: number;
  CompanyName?: string;
  Offer?: string;
  Image?: string;
  Size?: PackageSize[];
  [key: string]: any;
}

interface InnerProductProps {
  route?: {
    params?: ProductDetails;
  };
}

const InnerProduct: React.FC<InnerProductProps> = ({ route }) => {
  const productInfo = route?.params;
  const [totalCount, setTotalCount] = useState(1);
  const amount = Number(productInfo?.Price || 0) * totalCount;

  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.ThemeReducer.value);

  const handleAddProductCount = () => {
    if (productInfo && productInfo.Quantity <= totalCount) {
      setTotalCount(productInfo.Quantity);
    } else {
      setTotalCount(totalCount + 1);
    }
  };

  const handleRemoveProductCount = () => {
    if (totalCount > 1) {
      setTotalCount(totalCount - 1);
    } else if (totalCount === 0) {
      setTotalCount(1);
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addProduct({
        data: productInfo as any,
        quantity: totalCount,
        price: amount,
      }),
    );

    ToastAndroid.show(Title.PRODUCT_ADDED_TO_CART, ToastAndroid.SHORT);
  };

  return (
    <ScrollViewContainer>
      <HeaderContainer back={true} header={Title.PRODUCTS} Drawer={true} />

      <View>
        <Image
          source={{ uri: productInfo?.Image }}
          style={{ width: width - 15, height: 250 }}
          className="rounded-2xl"
        />
        <Text
          className="text-center text-2xl my-3"
          style={[{ fontFamily: FontFamily.MULISH_MEDIUM }, style(theme).text]}
        >
          {productInfo?.Name}
        </Text>
        <View className="flex flex-row justify-between items-center my-3">
          <View className="flex flex-row items-center">
            <Text className="text-lg" style={style(theme).text}>
              {Title.PRODUCT_BY}
            </Text>
            <Text
              style={[{ fontFamily: FontFamily.RALEWAY_MEDIUM }, style(theme).text]}
              className="text-xl"
            >
              {productInfo?.CompanyName}
            </Text>
          </View>
          {productInfo?.Offer ? (
            <Text className="font-bold text-lg" style={style(theme).text}>
              {productInfo.Offer}
            </Text>
          ) : null}
        </View>

        {productInfo?.Size && (
          <View className="flex flex-row items-center">
            <Text className="text-lg" style={style(theme).text}>
              {Title.SIZE_LABEL}
            </Text>
            <View className="flex flex-row">
              {productInfo.Size.map((item, index) => (
                <TouchableOpacity
                  className="p-2 w-11 m-2 rounded-lg"
                  style={{
                    backgroundColor:
                      theme === 'light'
                        ? Colors.BUTTON_DARK
                        : Colors.BUTTON_LIGHT,
                  }}
                  key={index}
                >
                  <Text className="text-center text-white">{item.Package}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        <View className="flex flex-row items-center">
          <Text className="text-lg" style={style(theme).text}>
            {Title.QUANTITY_AVAILABLE}
          </Text>

          <Text className="text-xl" style={style(theme).text}>
            {productInfo?.Quantity}
          </Text>
        </View>
      </View>

      <View className="flex flex-row my-4">
        <TouchableOpacity onPress={handleAddProductCount}>
          <Text
            className="w-40 mx-2 text-center p-4 rounded-3xl text-lg"
            style={
              theme === 'light'
                ? {
                    backgroundColor:
                      totalCount === productInfo?.Quantity
                        ? '#3f3f40'
                        : Colors.BUTTON_DARK,
                    color: Colors.WHITE,
                  }
                : {
                    backgroundColor:
                      totalCount === productInfo?.Quantity
                        ? '#3f3f40'
                        : Colors.BUTTON_LIGHT,
                    color: Colors.WHITE,
                  }
            }
          >
            {Title.ADD_PLUS}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRemoveProductCount}>
          <Text
            className="w-40 mx-2 text-center p-4 rounded-3xl text-lg"
            style={
              theme === 'light'
                ? {
                    backgroundColor:
                      totalCount === productInfo?.Quantity
                        ? Colors.BUTTON_DARK
                        : '#3f3f40',
                    color: Colors.WHITE,
                  }
                : {
                    backgroundColor:
                      totalCount === productInfo?.Quantity
                        ? Colors.BUTTON_LIGHT
                        : '#3f3f40',
                    color: Colors.WHITE,
                  }
            }
          >
            {Title.REMOVE_MINUS}
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <View className="flex flex-row my-4">
          <Text className="text-lg" style={style(theme).text}>
            {Title.TOTAL_QUANTITY_BUYING}
          </Text>
          <Text className="text-center text-lg" style={style(theme).text}>
            {totalCount}
          </Text>
        </View>
        <View className="flex flex-row my-2">
          <Text className="text-lg" style={style(theme).text}>
            {Title.TOTAL_PRICE}
          </Text>
          <Text className="text-center text-lg" style={style(theme).text}>
            {`${Title.RUPEES_SYMBOL} ${amount} ${Title.ONLY_SIGN}`}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => handleAddToCart()}
        className="mx-2 rounded-xl"
        style={{
          backgroundColor:
            theme === 'light' ? Colors.BUTTON_DARK : Colors.BUTTON_LIGHT,
        }}
      >
        <View className="p-4 w-full">
          <Text className="text-center text-lg text-white">
            {Title.ADD_TO_CART}
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollViewContainer>
  );
};

export default InnerProduct;

const style = (theme: string) =>
  StyleSheet.create({
    text: { color: theme === 'light' ? Colors.BLACK : Colors.WHITE },
  });
