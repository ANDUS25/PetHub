import React from 'react';
import { FlatList, Text, View } from 'react-native';

const petPolicy: string[] = [
  'Pet owner & care taker manually ',
  'Pet Insurance can be done on monthly basis for such activity',
  'Pet food pronation is owner responsibility',
];

const Policy: React.FC = () => (
  <View style={{ flex: 1 }}>
    <FlatList
      data={petPolicy}
      keyExtractor={(_item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={{ margin: 10, padding: 10 }}>
          <Text>• {item}</Text>
        </View>
      )}
    />
  </View>
);

export default Policy;
