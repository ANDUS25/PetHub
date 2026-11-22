import { RAZORPAY_KEY_ID } from '@env';
import React, { useEffect } from 'react';
import {
  Alert,
  FlatList,
  Image,
  ListRenderItem,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import { TrashIcon } from 'react-native-heroicons/outline';
import RazorpayCheckout from 'react-native-razorpay';
import { HeaderContainer } from '../../Container';
import { deleteProduct } from '../../store/Slices/CartSlice';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { CartItem } from '../../types';
import Colors from '../../utils/color';
import { GlobalAppTheme } from '../../utils/CommonUtils';
import { AppTheme, Title } from '../../utils/Strings';

const CartComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const razorPayKeyID = RAZORPAY_KEY_ID;

  const theme = useAppSelector((state) => state.ThemeReducer.value);
  const cartInfo = useAppSelector((state) => state.CartSlice);
  const user = useAppSelector((state) => state.userSlice);

  const productPrice = cartInfo
    .map((item) => item.price)
    .reduce((acc, reducer) => acc + reducer, 0);

  const handlePayment = () => {
    const options = {
      description: Title.CREDITS_TOWARDS_CONSULTATION,
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: Title.CURRENCY_INR,
      key: razorPayKeyID,
      amount: productPrice * 100,
      name: Title.APP_NAME,
      order_id: '',
      prefill: {
        email: user?.userEmail || '',
        contact: user?.userContact || '',
        name: user?.userName || '',
      },
      theme: { color: Colors.INFO_LIGHT },
    };

    RazorpayCheckout.open(options)
      .then((data: any) => {
        Alert.alert(Title.PAYMENT_SUCCESSFUL, `ID: ${data.razorpay_payment_id}`);
      })
      .catch((error: any) => {
        ToastAndroid.show(
          `${error?.error?.reason || Title.ERROR} : ${error?.error?.description || Title.PAYMENT_FAILED}`,
          ToastAndroid.LONG,
        );
      });
  };

  const handleDeleteCart = (obj: { id: string | number; name: string }) => {
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

  if (cartInfo.length === 0) {
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

  const renderCartItem: ListRenderItem<CartItem> = ({ item }) => (
    <View className="my-4 bg-slate-800 rounded-lg mx-2">
      <View
        className="rounded-t-lg flex flex-row"
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
            uri: item?.data?.Image,
          }}
          resizeMode="cover"
          style={{ height: 140, width: 200 }}
        />

        <View className="justify-center mx-2 space-y-3">
          <Text className="text-lg" style={{ color: Colors.WHITE }}>
            {item?.data?.Name}
          </Text>

          <Text className="text-base" style={{ color: Colors.WHITE }}>
            {Title.TOTAL_QUANTITY} :- {item?.quantity}
          </Text>

          <Text className="text-base" style={{ color: Colors.WHITE }}>
            {item?.price} {Title.RUPEES_SYMBOL} {Title.ONLY_SIGN}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          handleDeleteCart({
            id: item?.data?.id,
            name: item?.data?.Name,
          })
        }
      >
        <View className="items-center my-3">
          <TrashIcon color={Colors.WHITE} />
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="flex-1" style={{ backgroundColor: GlobalAppTheme(theme) }}>
      <HeaderContainer back={true} header={Title.CART} Drawer={true} />

      <FlatList
        data={cartInfo}
        keyExtractor={(item, index) => `${item.data.id}-${index}`}
        renderItem={renderCartItem}
      />

      <TouchableOpacity
        onPress={handlePayment}
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
