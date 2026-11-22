import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification';
import { DropdownContainer, TextInputContainer } from '../../../Container';
import Colors from '../../../utils/color';
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
        title: 'Warning',
        textBody: 'Please enter data in correct format',
        autoClose: true,
      });
    } else {
      Dialog.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Success',
        textBody: 'Congrats! this is dialog box success',
        autoClose: true,
      });
    }
  };

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View style={{ display: 'flex', alignItems: 'center' }}>
          <Text className="text-lg">User Details</Text>
        </View>
        <View style={{ margin: 10 }}>
          <Text>Family Members</Text>
          <DropdownContainer
            data={familyCount}
            placeholder={'Select Family Member'}
            onChange={({ value }: { value: string }) => {
              setFamily(value);
            }}
          />
        </View>
        <View style={{ margin: 10 }}>
          <Text>Property Type</Text>
          <DropdownContainer
            data={Rented}
            placeholder={'Select Apartment Type'}
            onChange={({ value }: { value: string }) => {
              setApartment(value);
            }}
          />
        </View>
        <View style={{ margin: 10 }}>
          <Text>City</Text>
          <TextInputContainer
            placeholder={'Please Enter City Name'}
            TextChange={setCity}
            style={{ borderBottomWidth: 1 }}
            className=""
            placeHolderColor={Colors.BLACK}
          />
        </View>
        <View style={{ margin: 10 }}>
          <Text>State</Text>
          <TextInputContainer
            placeholder={'Please Enter State Name'}
            TextChange={setState}
            style={{ borderBottomWidth: 1 }}
            className=""
            placeHolderColor={Colors.BLACK}
          />
        </View>
        <View style={{ margin: 10 }}>
          <Text>Country</Text>
          <TextInputContainer
            placeholder={'Please Enter Country Name'}
            TextChange={setCountry}
            style={{ borderBottomWidth: 1 }}
            className=""
            placeHolderColor={Colors.BLACK}
          />
        </View>
        <TouchableOpacity onPress={handleData} style={{ alignSelf: 'center', marginVertical: 16 }}>
          <Text
            style={{
              backgroundColor: Colors.INFO_DARK,
              borderRadius: 20,
              padding: 20,
              maxWidth: 200,
              color: Colors.WHITE,
              textAlign: 'center',
            }}
          >
            Register Yourself
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Register;
