import React from 'react';
import {
  Linking,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../../Container/Header';
import Colors from '../../utils/Colors';
import { GlobalAppTheme } from '../../utils/CommonUtils';
import { ScreenName, Title } from '../../utils/Strings';

const AboutUs = () => {
  const theme = useSelector(state => state.ThemeReducer.value);

  const newPageHandler = () => {
    ToastAndroid.show(Title.REDIRECTING_TO_BROWSER, ToastAndroid.SHORT);

    setTimeout(() => {
      Linking.openURL('https://www.mixo.io/site/pet-hub-nbuoc');
    }, 3000);
  };

  return (
    <>
      <StatusBar />
      <ScrollView style={styles(theme).container}>
        <View>
          <Header back={true} header={ScreenName.ABOUT_US} Drawer={true} />

          <View className="mx-3">
            <Text style={styles(theme).nameView}>
              <Text
                style={styles(theme).nameViewPrefix}
                className="font-bold ml-4"
              >
                M
              </Text>
              {Title.OWNER_OF_PETHUB}
            </Text>
            <Text
              style={styles(theme).nameViewSuffix}
              className="my-2 text-justify"
            >
              {Title.ABOUT_THE_APP}
            </Text>
            <Text style={styles(theme).moreDetailView}>
              {Title.MORE_DETAILS_PLEASE_VISIT}
              <Text
                style={styles(theme).titleView}
                onPress={newPageHandler}
                className={'underline border-b-2'}
              >
                {Title.IT_PRO_CONSULT}
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = (theme: string): any =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: GlobalAppTheme(
        theme,
        Colors.INACTIVE_TAB_BACKGROUND,
        Colors.ACTIVE_TAB_BACKGROUND,
      ),
    },
    nameView: {
      fontSize: 18,
      ...styles(theme).commonColorStyle,
      ...styles(theme).commonFontFamily,
    },
    nameViewPrefix: { fontSize: 28 },
    nameViewSuffix: { fontSize: 18 },
    moreDetailView: {
      fontSize: 20,
      ...styles(theme).commonColorStyle,
      ...styles(theme).commonFontFamily,
    },
    titleView: { ...styles(theme).commonBackgroundColor, borderBottomWidth: 4 },

    commonColorStyle: {
      color: GlobalAppTheme(theme, Colors.BLACK, Colors.WHITE),
    },
    commonBackgroundColor: {
      borderBottomColor: GlobalAppTheme(theme, Colors.BLACK, Colors.WHITE),
    },
    commonFontFamily: {
      fontFamily: 'Mulish-Light',
    },
  });

export default AboutUs;
