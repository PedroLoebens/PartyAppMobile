import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Festas ao redor</Text>
      <Text style={styles.subtitle}>Encontre o melhor pra você</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 40,

  },
  title: {
    fontSize: 36,
    fontFamily: 'Comfortaa',
    fontWeight: 400,
    lineHeight: 40,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 13,
    fontFamily: 'Roboto',
    fontWeight: 900,
    paddingTop: 12,
    lineHeight: 15,
    textTransform: 'uppercase',
  }
});
