import { RAZORPAY_KEY_ID } from '@env';
import React, { useEffect } from 'react';
import {
  Alert,
  FlatList,
  Image,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import { TrashIcon } from 'react-native-heroicons/outline';
import RazorpayCheckout from 'react-native-razorpay';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderContainer } from '../../Container';
import { deleteProduct } from '../../store/Slices/CartSlice';
import { AppTheme, Title } from '../../utils/Strings';
import Colors from '../../utils/Colors';
import { GlobalAppTheme } from '../../utils/CommonUtils';

const CartComponent = () => {
  const dispatch = useDispatch();
  let razorPayKeyID = RAZORPAY_KEY_ID;

  const theme = useSelector(state => state.ThemeReducer.value);
  const cartInfo = useSelector(state => state.CartSlice);
  const user = useSelector(state => state.userSlice);

  let productPrice = cartInfo
    .map(item => item.price)
    .reduce((acc, reducer) => acc + reducer, 0);

  const handlePayment = () => {
    let options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: razorPayKeyID,
      amount: productPrice * 100,
      name: 'PetHub',
      order_id: '',
      prefill: {
        email: user?.userEmail,
        contact: user?.userContact,
        name: user?.userName,
      },
      theme: { color: Colors.INFO_LIGHT },
    };
    RazorpayCheckout.open(options)
      .then(data => {
        console.log('Payment Successful:', data);
        Alert.alert(
          Title.PAYMENT_SUCCESSFUL,
          `ID: ${data.razorpay_payment_id}`,
        );
      })
      .catch(error => {
        ToastAndroid.show(
          `${error.error.reason} : ${error.error.description}`,
          ToastAndroid.LONG,
        );
      });
  };

  const handleDeleteCart = obj => {
    Alert.alert(Title.ARE_WANT_TO_DELETE_THIS_CART, '', [
      {
        text: Title.YES,
        onPress: () =>
          dispatch(
            deleteProduct({
              id: obj.id,
              name: obj.name,
            }),
          ),
      },
      {
        text: Title.NO,
        onPress: () => {},
      },
    ]);
  };

  useEffect(() => {}, [cartInfo]);

  if (cartInfo?.length == 0) {
    return (
      <View
        className="flex-1 justify-center items-center"
        style={{ backgroundColor: GlobalAppTheme(theme) }}
      >
        <Text style={{ color: Colors.WHITE }} className="text-2xl">
          {Title.CART_IS_EMPTY}
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1" style={{ backgroundColor: GlobalAppTheme(theme) }}>
      <HeaderContainer back={true} header={'Cart'} Drawer={true} />

      <FlatList
        data={cartInfo}
        renderItem={item => (
          <View className="my-4 bg-slate-800 rounded-lg mx-2">
            <View
              className="rounded-T-lg flex flex-row"
              style={{
                backgroundColor: GlobalAppTheme(
                  theme,
                  Colors.INFO_DARK,
                  Colors.INFO_LIGHT,
                ),
              }}
            >
              <Image
                className="rounded-lg"
                source={{
                  uri: item?.item?.data?.Image,
                }}
                resizeMode="cover"
                style={{ height: 140, width: 200 }}
              />
              <View className="justify-center mx-2 space-y-3">
                <Text className="text-lg" style={{ color: Colors.WHITE }}>
                  {item?.item?.data?.Name}
                </Text>
                <Text className="text-base" style={{ color: Colors.WHITE }}>
                  {Title.TOTAL_QUANTITY} :- {item?.item?.quantity}
                </Text>
                <Text className="text-base" style={{ color: Colors.WHITE }}>
                  {item?.item?.price} {Title.RUPEES_SYMBOL} {Title.ONLY_SIGN}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() =>
                handleDeleteCart({
                  id: item?.item?.data?.id,
                  name: item?.item?.data?.Name,
                })
              }
            >
              <View className="items-center my-3">
                <TrashIcon color={Colors.WHITE} />
              </View>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        onPress={() => handlePayment()}
        className="mx-2 rounded-xl"
        style={{
          backgroundColor:
            theme === AppTheme.LIGHT ? Colors.BUTTON_DARK : Colors.BUTTON_LIGHT,
        }}
      >
        <View className="p-4 w-full ">
          <Text className="text-center text-lg text-white">
            {Title.CHECK_OUT}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CartComponent;
