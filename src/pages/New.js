import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function New() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>New</Text>
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
  },
});
