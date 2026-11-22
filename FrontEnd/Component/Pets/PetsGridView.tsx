import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import pets from '../../JSON/pets.json';
import { useAppSelector } from '../../store/store';
import Colors from '../../utils/color';

interface PetsGridViewProps {
  mainPetName: string;
}

interface BreedItem {
  id?: string | number;
  petName: string;
  image: string;
  [key: string]: any;
}

const PetsGridView: React.FC<PetsGridViewProps> = ({ mainPetName }) => {
  const [petsName, setPetsName] = useState<any[]>([]);
  const navigation = useNavigation<any>();

  const theme = useAppSelector((state) => state.ThemeReducer.value);

  const petsInfo = () => {
    const petsBreeds = pets.filter((i) => i.category === mainPetName);
    setPetsName(petsBreeds);
  };

  const petProducts = petsName.flatMap((i) => i.products);
  const petsBreeds: BreedItem[] = petsName.flatMap((i) => i.breeds);

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
        }}
      >
        {mainPetName}
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={petsBreeds}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View
            className="flex flex-col p-3 m-2 rounded-2xl"
            style={[
              {
                backgroundColor:
                  theme === 'light' ? Colors.INFO_DARK : Colors.INFO_LIGHT,
              },
              { width: 250 },
            ]}
            key={index}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('InnerPetScreen', { i: { item }, petProducts });
              }}
            >
              <Image
                source={{ uri: item.image }}
                resizeMode="cover"
                style={{ height: 200, width: 230 }}
                className="rounded-2xl"
              />
              <Text
                className="text-xl text-center mt-4"
                style={{ color: Colors.WHITE }}
              >
                {item.petName}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default PetsGridView;
