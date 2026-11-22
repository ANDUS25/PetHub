import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { HeaderContainer, ScrollViewContainer } from '../../Container';
import { Typography } from '../../theme/Typography';
import { ScreenTitle, Title } from '../../utils/Strings';

const Settings: React.FC = () => {
  return (
    <ScrollViewContainer>
      <HeaderContainer back={true} header={ScreenTitle.SETTINGS} Drawer={true} />
      <Text style={styles.text}>{Title.SETTINGS_SCREEN_TEXT}</Text>
    </ScrollViewContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    ...Typography.input,
    padding: 16,
  },
});

export default Settings;
