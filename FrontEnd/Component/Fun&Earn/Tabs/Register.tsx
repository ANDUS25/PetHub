import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification';
import { DropdownContainer, TextInputContainer } from '../../../Container';
import Colors from '../../../utils/color';
import { Title } from '../../../utils/Strings';
import { valueIsEmpty } from '../../../utils/utils';

const familyCount = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
];

const Rented = [
  { label: 'Own', value: 'Own' },
  { label: 'Rented', value: 'Rented' },
  { label: 'Flat', value: 'Flat' },
  { label: 'Gated', value: 'Gated' },
  { label: 'Society', value: 'Society' },
  { label: 'Independent Bungalow', value: 'Independent Bungalow' },
];

const Register: React.FC = () => {
  const [apartment, setApartment] = useState('');
  const [family, setFamily] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

  const handleData = () => {
    if (
      valueIsEmpty(family) ||
      valueIsEmpty(apartment) ||
      valueIsEmpty(city) ||
      valueIsEmpty(state) ||
      valueIsEmpty(country)
    ) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: Title.WARNING,
        textBody: Title.PLEASE_ENTER_DATA_CORRECT_FORMAT,
        autoClose: true,
      });
    } else {
      Dialog.show({
        type: ALERT_TYPE.SUCCESS,
        title: Title.SUCCESS,
        textBody: Title.DIALOG_BOX_SUCCESS,
        autoClose: true,
      });
    }
  };

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View style={{ display: 'flex', alignItems: 'center' }}>
          <Text className="text-lg">{Title.USER_DETAILS}</Text>
        </View>
        <View style={{ margin: 10 }}>
          <Text>{Title.FAMILY_MEMBERS}</Text>
          <DropdownContainer
            data={familyCount}
            placeholder={Title.SELECT_FAMILY_MEMBER}
            onChange={({ value }: { value: string }) => {
              setFamily(value);
            }}
          />
        </View>
        <View style={{ margin: 10 }}>
          <Text>{Title.PROPERTY_TYPE}</Text>
          <DropdownContainer
            data={Rented}
            placeholder={Title.SELECT_APARTMENT_TYPE}
            onChange={({ value }: { value: string }) => {
              setApartment(value);
            }}
          />
        </View>
        <View style={{ margin: 10 }}>
          <Text>{Title.CITY}</Text>
          <TextInputContainer
            placeholder={Title.PLEASE_ENTER_CITY_NAME}
            TextChange={setCity}
            style={{ borderBottomWidth: 1 }}
            className=""
            placeHolderColor={Colors.BLACK}
          />
        </View>
        <View style={{ margin: 10 }}>
          <Text>{Title.STATE}</Text>
          <TextInputContainer
            placeholder={Title.PLEASE_ENTER_STATE_NAME}
            TextChange={setState}
            style={{ borderBottomWidth: 1 }}
            className=""
            placeHolderColor={Colors.BLACK}
          />
        </View>
        <View style={{ margin: 10 }}>
          <Text>{Title.COUNTRY}</Text>
          <TextInputContainer
            placeholder={Title.PLEASE_ENTER_COUNTRY_NAME}
            TextChange={setCountry}
            style={{ borderBottomWidth: 1 }}
            className=""
            placeHolderColor={Colors.BLACK}
          />
        </View>
        <TouchableOpacity
          onPress={handleData}
          className="bg-yellow-400 p-5 rounded-3xl m-2"
        >
          <Text className="text-center">{Title.SUBMIT}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Register;
