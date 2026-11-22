import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { HeaderContainer, ScrollViewContainer } from '../../Container';

const Settings: React.FC = () => {
  return (
    <ScrollViewContainer>
      <HeaderContainer back={true} header={'Settings'} Drawer={true} />
      <Text style={styles.text}>This is Settings Screen</Text>
    </ScrollViewContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Mulish-Medium',
    fontSize: 20,
    padding: 16,
  },
});

export default Settings;
