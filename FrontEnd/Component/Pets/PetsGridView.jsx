import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import pets from '../../JSON/pets.json';
import Colors from '../../utils/Colors';

const PetsGridView = ({ mainPetName }) => {
  const [petsName, setPetsName] = useState([]);
  const Navigation = useNavigation();

  const theme = useSelector(state => state.ThemeReducer.value);

  const petsInfo = () => {
    const petsBreeds = pets.filter(i => i.category == mainPetName);
    setPetsName(petsBreeds);
  };

  const petProducts = petsName.flatMap(i => i.products);

  const petsBreeds = petsName.flatMap(i => i.breeds);

  useEffect(() => {
    petsInfo();
  }, []);

  return (
    <View>
      <Text
        className="text-2xl ml-2"
        style={{
          color: theme === 'light' ? Colors.BLACK : Colors.WHITE,
          fontFamily: 'Mulish-Medium',
        }}>
        {mainPetName}
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={petsBreeds}
        show
        renderItem={(i, index) => {
          return (
            <View
              className="flex flex-col p-3 m-2 rounded-2xl"
              style={[
                {
                  backgroundColor:
                    theme === 'light' ? Colors.INFO_DARK : Colors.INFO_LIGHT,
                },
                { width: 250 },
              ]}
              key={index}>
              <TouchableOpacity
                onPress={() => {
                  Navigation.navigate('InnerPetScreen', { i, petProducts });
                }}>
                <Image
                  source={{ uri: i?.item?.image }}
                  resizeMode="cover"
                  style={{ height: 200, width: 230 }}
                  className="rounded-2xl"
                />
                <Text
                  className="text-xl text-center mt-4"
                  style={{ color: Colors.WHITE }}>
                  {i?.item?.petName}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default PetsGridView;
