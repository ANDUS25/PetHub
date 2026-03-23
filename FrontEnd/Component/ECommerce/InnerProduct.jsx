import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderContainer, ScrollViewContainer } from '../../Container';
import { addProduct } from '../../store/Slices/CartSlice';
import Colors from '../../utils/Colors';

const { width } = Dimensions.get('screen');

const InnerProduct = ({ route }) => {
  const productInfo = route.params;
  const [totalCount, setTotalCount] = useState(1);
  let amount = Number(productInfo.Price) * totalCount;

  const dispatch = useDispatch();

  const handleAddProductCount = () => {
    if (productInfo.Quantity <= totalCount) {
      setTotalCount(productInfo.Quantity);
    } else {
      setTotalCount(totalCount + 1);
    }
  };

  const handleRemoveProductCount = () => {
    if (totalCount > 1) {
      setTotalCount(totalCount - 1);
    } else if (totalCount == 0) {
      setTotalCount(1);
    }
  };
  const theme = useSelector(state => state.ThemeReducer.value);
  const products = useSelector(state => state?.productDetail);

  const handleAddToCart = () => {
    dispatch(
      addProduct({ data: productInfo, quantity: totalCount, price: amount }),
    );

    ToastAndroid.show('Product Added to cart', ToastAndroid.SHORT);
  };

  useEffect(() => { }, [totalCount]);

  return (
    <ScrollViewContainer>
      <HeaderContainer back={true} header={'Products'} Drawer={true} />

      <View>
        <Image
          source={{ uri: productInfo.Image }}
          style={{ width: width - 15, height: 250 }}
          className="rounded-2xl"
        />
        <Text
          className="text-center text-2xl my-3"
          style={[{ fontFamily: 'Mulish-Medium' }, style(theme).text]}>
          {productInfo.Name}
        </Text>
        <View className="flex flex-row justify-between items-center my-3">
          <View className="flex flex-row items-center">
            <Text className="text-lg" style={style(theme).text}>
              Product By -{' '}
            </Text>
            <Text
              style={[{ fontFamily: 'Raleway-Medium' }, style(theme).text]}
              className="text-xl">
              {productInfo.CompanyName}
            </Text>
          </View>
          <Text className="font-bold text-lg" style={style(theme).text}>
            {productInfo.Offer}
          </Text>
        </View>
        <View className="flex flex-row items-center">
          <Text className="text-lg" style={style(theme).text}>
            Size:-
          </Text>
          <View className="flex flex-row">
            {productInfo.Size.map((item, index) => {
              return (
                <TouchableOpacity
                  className="p-2 w-11 m-2 rounded-lg"
                  style={{
                    backgroundColor:
                      theme === 'light'
                        ? Colors.BUTTON_DARK
                        : Colors.BUTTON_LIGHT,
                  }}
                  // onPress={() => console.log(item.Package)}
                  key={index}>
                  <Text className="text-center text-white">{item.Package}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View className="flex flex-row items-center">
          <Text className="text-lg" style={style(theme).text}>
            Quantity Available :-{' '}
          </Text>

          <Text className="text-xl" style={style(theme).text}>
            {productInfo.Quantity}
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
                    totalCount === productInfo.Quantity
                      ? '#3f3f40'
                      : Colors.BUTTON_DARK,
                  color: Colors.WHITE,
                }
                : {
                  backgroundColor:
                    totalCount === productInfo.Quantity
                      ? '#3f3f40'
                      : Colors.BUTTON_LIGHT,
                }
            }>
            Add +
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRemoveProductCount}>
          <Text
            className="w-40 mx-2 text-center p-4 rounded-3xl text-lg"
            style={
              theme === 'light'
                ? {
                  backgroundColor:
                    totalCount === productInfo.Quantity
                      ? Colors.ButtonDark
                      : '#3f3f40',
                  color: Colors.WHITE,
                }
                : {
                  backgroundColor:
                    totalCount === productInfo.Quantity
                      ? Colors.BUTTON_LIGHT
                      : '#3f3f40',
                }
            }>
            Remove -
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <View className="flex flex-row my-4">
          <Text className="text-lg" style={style(theme).text}>
            Total Quantity you're buying :{' '}
          </Text>
          <Text className="text-center text-lg" style={style(theme).text}>
            {totalCount}
          </Text>
        </View>
        <View className="flex flex-row my-2">
          <Text className="text-lg" style={style(theme).text}>
            Total Price :{' '}
          </Text>
          <Text className="text-center text-lg" style={style(theme).text}>
            {`₹ ${amount} /-`}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => handleAddToCart()}
        className="mx-2 rounded-xl"
        style={{
          backgroundColor:
            theme === 'light' ? Colors.BUTTON_DARK : Colors.BUTTON_LIGHT,
        }}>
        <View className="p-4 w-full">
          <Text className="text-center text-lg text-white">Add to cart</Text>
        </View>
      </TouchableOpacity>
    </ScrollViewContainer>
  );
};
export default InnerProduct;

const style = theme =>
  StyleSheet.create({
    text: { color: theme === 'light' ? Colors.BLACK : Colors.WHITE },
  });
