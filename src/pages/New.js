import React from 'react';
import { Text, View, StatusBar, TextInput } from 'react-native';
import { ButtonConfirm } from '../components/ButtonConfirm'

import { styles } from '../assets/css/style';

export default function New() {
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#ffffff"
        barStyle={"dark-content"}
      />
      
      <Text style={styles.title}>New Event</Text>
      <View style={styles.containerInputs}>
        <TextInput style={styles.input}/>
        <ButtonConfirm></ButtonConfirm>
      </View>

      
    </View>
  );
}
