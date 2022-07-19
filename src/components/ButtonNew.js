import React from "react";
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from '../assets/css/style';

export default function ButtonNew(){
  return(
    <View>
      <LinearGradient
      colors={['#FF00D6', '#FF4D00']}
      locations={[0, 1]}
      style={styles.gradientBtnNew}
      >
        <Feather style={styles.iconPlus} name="plus" size={20} color={'#ffffff'} />  
      </LinearGradient>
    </View>
  )
}
