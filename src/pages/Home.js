import React from 'react';
import { Text, View, StatusBar, SafeAreaView } from 'react-native';

import { styles } from '../assets/css/style';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar
          animated={true}
          backgroundColor="#ffffff"
          barStyle={"dark-content"}
        />

        <Text style={styles.titleHome}>Festas ao redor</Text>
        <Text style={styles.subtitle}>Encontre o melhor pra você</Text>
      </View>
    </SafeAreaView>
  );
}
