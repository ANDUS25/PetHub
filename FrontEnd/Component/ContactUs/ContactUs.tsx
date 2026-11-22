import { useNavigation } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import {
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import { HeaderContainer, TextInputContainer } from '../../Container/index';
import { useAppSelector } from '../../store/store';
import {
  globalAppActiveTheme,
  globalAppBlackAndWhiteTheme,
} from '../../utils/CommonUtils';
import { ScreenName, ScreenTitle, Title } from '../../utils/Strings';

const ContactUs: React.FC = () => {
  const navigation = useNavigation<any>();
  const theme = useAppSelector((state) => state.ThemeReducer.value);

  const [userInputInfo, setUserInputInfo] = useState({
    fName: '',
    lName: '',
    email: '',
    subject: '',
    message: '',
  });

  const OkHandler = () => {
    if (
      userInputInfo.fName === '' ||
      userInputInfo.lName === '' ||
      userInputInfo.email === ''
    ) {
      Alert.alert(Title.PLEASE_FILL_NAMES_AND_EMAIL_AT_LEAST);
    } else {
      ToastAndroid.show(Title.THANK_YOU_FOR_YOUR_RESPONSE, ToastAndroid.CENTER);
      setTimeout(() => {
        navigation.navigate(ScreenName.LANDING);
      }, 3000);
    }
  };

  const handleConfirmation = () => {
    Alert.alert(Title.WANT_TO_SUBMIT_DATA, '', [
      { text: Title.YES, onPress: OkHandler },
      {
        text: Title.NO,
        onPress: () => {},
      },
    ]);
  };

  const dynamicStyles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: globalAppActiveTheme(theme),
        },
        textInput: {
          backgroundColor: globalAppActiveTheme(theme),
          color: globalAppBlackAndWhiteTheme(theme),
          fontFamily: 'Mulish-Medium',
          fontSize: 20,
        },
        mainHeader: {
          fontFamily: 'Mulish-Bold',
          fontSize: 20,
          color: globalAppBlackAndWhiteTheme(theme),
        },
      }),
    [theme],
  );

  return (
    <>
      <StatusBar />
      <ScrollView style={dynamicStyles.container}>
        <View>
          <HeaderContainer
            back={true}
            header={ScreenTitle.CONTACT_US}
            Drawer={true}
          />

          <View className="flex flex-col justify-between mx-2">
            <View className="my-4">
              <Text style={dynamicStyles.mainHeader} className="text-center">
                If you would like to donate to our cause or report a stray
                animal, then please contact our 24/7 help center.
              </Text>
            </View>
            <View>
              <TextInputContainer
                placeholder={Title.FIRST_NAME}
                className="w-full p-3 rounded-2xl my-2"
                style={dynamicStyles.textInput}
                TextChange={(e: string) =>
                  setUserInputInfo(prev => ({ ...prev, fName: e }))
                }
                placeHolderColor={globalAppBlackAndWhiteTheme(theme)}
              />

              <TextInputContainer
                placeholder={Title.Last_Name}
                className="w-full p-3 rounded-2xl my-2"
                style={dynamicStyles.textInput}
                TextChange={(e: string) =>
                  setUserInputInfo(prev => ({ ...prev, lName: e }))
                }
                placeHolderColor={globalAppBlackAndWhiteTheme(theme)}
              />

              <TextInputContainer
                placeholder={Title.Email_Address}
                className="w-full p-3 rounded-2xl my-2"
                style={dynamicStyles.textInput}
                TextChange={(e: string) =>
                  setUserInputInfo(prev => ({ ...prev, email: e }))
                }
                placeHolderColor={globalAppBlackAndWhiteTheme(theme)}
              />

              <TextInputContainer
                placeholder={Title.SUBJECT}
                className="w-full p-3 rounded-2xl my-2"
                TextChange={(e: string) =>
                  setUserInputInfo(prev => ({ ...prev, subject: e }))
                }
                style={dynamicStyles.textInput}
                placeHolderColor={globalAppBlackAndWhiteTheme(theme)}
              />

              <TextInputContainer
                placeholder={Title.MESSAGE}
                className="w-full p-3 rounded-2xl my-2"
                TextChange={(e: string) => {
                  setUserInputInfo(prev => ({ ...prev, message: e }));
                }}
                style={dynamicStyles.textInput}
                placeHolderColor={globalAppBlackAndWhiteTheme(theme)}
              />
            </View>

            <TouchableOpacity onPress={handleConfirmation}>
              <View className="flex flex-row justify-center mx-auto bg-blue-500 w-1/2 p-4 rounded-2xl mt-6">
                <Text className="text-xl text-white">{Title.SUBMIT}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ContactUs;
