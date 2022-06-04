import React from 'react';
import { Text, View } from 'react-native';

import { styles } from '../assets/css/style';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleHome}>Festas ao redor</Text>
      <Text style={styles.subtitle}>Encontre o melhor pra você</Text>
    </View>
  );
}
