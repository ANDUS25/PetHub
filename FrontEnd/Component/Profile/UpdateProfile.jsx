import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  StatusBar,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollViewContainer} from '../../Container';
import Header from '../../Container/Header';
import UseAuth from '../../hooks/useAuth';
import {updateData} from '../../store/Slices/UserSlice';

const UpdateProfile = () => {
  const {user} = UseAuth();
  const dispatch = useDispatch();
  const Navigation = useNavigation();
  const theme = useSelector(state => state.ThemeReducer.value);

  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [quote, setQuote] = useState('');
  const [userContact, setUserContact] = useState('');

  const ProfileUpdateHandler = () => {
    dispatch(
      updateData({
        Name:userName,
        Country: country,
        Email: user.email,
        Age: age,
        SomeThingExtra: quote,
        Contact: userContact,
      }),
    );

    ToastAndroid.show('Profile Update Successfully', ToastAndroid.SHORT);

    setTimeout(() => {
      Navigation.navigate('Profile');
    }, 3000);
  };

  return (
    <>
      <StatusBar />
      <ScrollViewContainer>
        <View>
          <Header back={true} header={'Update Profile'} Drawer={true} />
          <View className="flex items-center my-4">
            <Image source={require('../../assets/images/user.png')} />
          </View>

          <View>
            <View className="m-2">
              <Text
                style={{
                  color: theme === 'light' ? '#000' : '#fff',
                  fontFamily: 'Raleway-Regular',
                  fontSize: 18,
                }}>
                Name:-
              </Text>
              <TextInput
                value={userName}
                onChangeText={e => setUserName(e)}
                className="w-full p-3 rounded-2xl my-2"
                style={{
                  backgroundColor: theme === 'light' ? '#201658' : '#B4D4FF',
                  color: theme === 'light' ? '#fff' : '#000',
                  fontFamily: 'Mulish-Medium',
                  fontSize: 20,
                }}
              />
            </View>

            <View className="m-2">
              <Text
                style={{
                  color: theme === 'light' ? '#000' : '#fff',
                  fontFamily: 'Raleway-Regular',
                  fontSize: 18,
                }}>
                Email:-
              </Text>
              <TextInput
                value={user?.email}
                editable={false}
                className="w-full p-3 rounded-2xl my-2"
                style={{
                  backgroundColor: theme === 'light' ? '#201658' : '#B4D4FF',
                  color: theme === 'light' ? '#fff' : '#000',
                  fontFamily: 'Mulish-Medium',
                  fontSize: 20,
                }}
              />
            </View>

            <View className="m-2">
              <Text
                style={{
                  color: theme === 'light' ? '#000' : '#fff',
                  fontFamily: 'Raleway-Regular',
                  fontSize: 18,
                }}>
                age:-
              </Text>
              <TextInput
                value={age}
                onChangeText={e => setAge(e)}
                className="w-full p-3 rounded-2xl my-2"
                keyboardType="numeric"
                style={{
                  backgroundColor: theme === 'light' ? '#201658' : '#B4D4FF',
                  color: theme === 'light' ? '#fff' : '#000',
                  fontFamily: 'Mulish-Medium',
                  fontSize: 20,
                }}
              />
            </View>
            
            <View className="m-2">
              <Text
                style={{
                  color: theme === 'light' ? '#000' : '#fff',
                  fontFamily: 'Raleway-Regular',
                  fontSize: 18,
                }}>
                Number:-
              </Text>
              <TextInput
                value={userContact}
                onChangeText={e => setUserContact(e)}
                className="w-full p-3 rounded-2xl my-2"
                keyboardType="numeric"
                maxLength={10}
                style={{
                  backgroundColor: theme === 'light' ? '#201658' : '#B4D4FF',
                  color: theme === 'light' ? '#fff' : '#000',
                  fontFamily: 'Mulish-Medium',
                  fontSize: 20,
                }}
              />
            </View>

            <View className="m-2">
              <Text
                style={{
                  color: theme === 'light' ? '#000' : '#fff',
                  fontFamily: 'Raleway-Regular',
                  fontSize: 18,
                }}>
                Country:-
              </Text>
              <TextInput
                value={country}
                onChangeText={e => setCountry(e)}
                className="w-full p-3 rounded-2xl my-2"
                style={{
                  backgroundColor: theme === 'light' ? '#201658' : '#B4D4FF',
                  color: theme === 'light' ? '#fff' : '#000',
                  fontFamily: 'Mulish-Medium',
                  fontSize: 20,
                }}
              />
            </View>

            <View className="m-2">
              <Text
                style={{
                  color: theme === 'light' ? '#000' : '#fff',
                  fontFamily: 'Raleway-Regular',
                  fontSize: 18,
                }}>
                Something Extra !
              </Text>
              <TextInput
                value={quote}
                onChangeText={e => setQuote(e)}
                className="w-full p-3 rounded-2xl my-2"
                placeholder="Write something"
                placeholderTextColor={{
                  color: theme === 'light' ? '#fff' : '#000',
                }}
                style={{
                  backgroundColor: theme === 'light' ? '#201658' : '#B4D4FF',
                  color: theme === 'light' ? '#fff' : '#000',
                  fontFamily: 'Mulish-Medium',
                  fontSize: 20,
                }}
              />
            </View>
          </View>
        </View>
        <View className="flex items-center">
          <View className="w-1/2  my-4 ">
            <TouchableOpacity
              onPress={() => ProfileUpdateHandler()}
              className="bg-teal-800 p-5 rounded-xl ">
              <Text className="text-white text-center">Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollViewContainer>
    </>
  );
};

export default UpdateProfile;
