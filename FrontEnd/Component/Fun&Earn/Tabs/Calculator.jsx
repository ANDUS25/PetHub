import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const data = [
  {
    id: 1,
    animal: 'Dog',
    price: {
      tlwHrs: 400,
      tfHrs: 800,
      twfHrs: 700,
    },
  },
  {
    id: 2,
    animal: 'Cat',
    price: {
      tlwHrs: 300,
      tfHrs: 700,
      twfHrs: 500,
    },
  },
  {
    id: 3,
    animal: 'Bird',
    price: {
      tlwHrs: 250,
      tfHrs: 600,
      twfHrs: 450,
    },
  },
  {
    id: 4,
    animal: 'Fish',
    price: {
      tlwHrs: 150,
      tfHrs: 300,
      twfHrs: 250,
    },
  },
];

const time = ['12hrs', '24hrs', '24+24hrs'];
const Calculator = () => {
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          borderWidth:2,
          padding:10
        }}>
        {time.map(item => {
          return (
            <View>
              <Text className='text-lg'>{item}</Text>
            </View>
          );
        })}
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{borderWidth: 1, width: '40%'}} />
              <Text style={{textAlign: 'center'}} className="m-5">
                {item.animal}
              </Text>
              <View style={{borderWidth: 1, width: '40%'}} />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <TouchableOpacity
                style={{borderRadius: 10, borderWidth: 1, padding: 10}}>
                <Text>{item.price.tlwHrs}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{borderRadius: 10, borderWidth: 1, padding: 10}}>
                <Text>{item.price.tfHrs}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{borderRadius: 10, borderWidth: 1, padding: 10}}>
                <Text>{item.price.twfHrs}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Calculator;
