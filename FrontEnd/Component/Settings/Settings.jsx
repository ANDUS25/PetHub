import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {HeaderContainer, ScrollViewContainer} from '../../Container';

const Settings = () => {
  return (
    <ScrollViewContainer style={styles.Text}>
      <HeaderContainer back={true} header={'Settings'} Drawer={true} />
      <Text>This is Settings Screen</Text>
    </ScrollViewContainer>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontFamily: 'regular',
    fontSize: 28,
  },
});
export default Settings;
