import React from 'react';
import { Text, View, StatusBar } from 'react-native';

import { styles } from '../assets/css/style';

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#ffffff"
        barStyle={"dark-content"}
      />
      
      <Text style={styles.titleHome}>Festas ao redor</Text>
      <Text style={styles.subtitle}>Encontre o melhor pra você</Text>
    </View>
  );
}
