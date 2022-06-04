import React from 'react';
import { Text, View } from 'react-native';
import { ButtonBuyTicket } from '../components/ButtonBuyTicket'

import { styles } from '../../assets/css/style';

export default function New() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>New</Text>

      <ButtonBuyTicket></ButtonBuyTicket>
    </View>
  );
}
