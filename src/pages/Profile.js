import React from 'react';
import { Text, View, StatusBar } from 'react-native';

import { styles } from '../assets/css/style';

export default function Profile() {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#ffffff"
        barStyle={"dark-content"}
      />
      
      <Text style={styles.title}>Profile</Text>
    </View>
  );
}
