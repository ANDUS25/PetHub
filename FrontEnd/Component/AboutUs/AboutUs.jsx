import React from 'react';
import {
  Linking,
  ScrollView,
  StatusBar,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../../Container/Header';

const AboutUs = () => {
  const theme = useSelector(state => state.ThemeReducer.value);

  const newPageHandler = () => {
    ToastAndroid.show('Redirecting to Browser', ToastAndroid.SHORT);

    setTimeout(() => {
      Linking.openURL('https://www.mixo.io/site/pet-hub-nbuoc');
    }, 3000);
  };

  return (
    <>
      <StatusBar />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: theme === 'light' ? '#B4D4FF' : '#201658',
        }}>
        <View>
          <Header back={true} header={'About Us'} Drawer={true} />

          <View className="mx-3">
            <Text
              style={{
                fontSize: 18,
                color: theme === 'light' ? '#000' : '#fff',
                fontFamily: 'Mulish-Light',
              }}
              className="">
              <Text style={{fontSize: 28}} className="font-bold ml-4">
                M
              </Text>
              r. Saajan Gangawane the owner of PetHub who is animal lover and
              undergone best practices over pet industry.
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: theme === 'light' ? '#000' : '#fff',
                fontFamily: 'Mulish-Light',
              }}
              className="my-2 text-justify">
              {' '}
              He is in pet industry since his childhood and started taking care
              of animal, he is the person who not only understands the interest
              of humans over pet but also understands the problems and challenge
              while raising a pet . Owners professional routine requirements ,
              single owner time constraints , on-site visits, veterinary advice,
              best quality pet, nearby pet farm/ day care and many more so to
              overcome such challenges the idea took place called the “Pet-Hub”.
              Pet hub was in inception from early 2002 and started operational
              in 2007 and with digital platform in 2012. we got our first
              funding in 2017 and after pandemic we gear up and Started our
              smart phone user interface as App platform where pet owners can
              socially interact with other pet owners and can upload the pet
              videos and reels.
            </Text>
            <Text
              style={{
                color: theme === 'light' ? '#000' : '#fff',
                fontSize: 20,
                fontFamily: 'Mulish-Light',
              }}>
              PetHub is an ITPC product, for more details please visit{' '}
              <Text
                style={{
                  borderBottomColor: theme == 'light' ? '#000' : '#fff',
                  borderBottomWidth: 4,
                }}
                onPress={() => newPageHandler()}
                className={'underline border-b-2'}>
                {' '}
                IT Pro Consult
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default AboutUs;
