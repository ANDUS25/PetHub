import {FlatList, Text, View} from 'react-native';

const petPolicy = [
  'Pet owner & care taker manually ',
  'Pet Insurance can be done on monthly basis for such activity',
  'Pet food pronation is owner responsibility',
];

const Policy = () => (
  <View style={{flex: 1}}>
    <FlatList
      data={petPolicy}
      renderItem={({item}) => (
        <View style={{margin: 10, color: '#fff', padding: 10}}>
          <Text>• {item}</Text>
        </View>
      )}
    />
  </View>
);

export default Policy;
