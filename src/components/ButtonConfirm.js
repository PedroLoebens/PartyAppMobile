import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from '../assets/css/style';

export function ButtonConfirm(){
  return(
    <View>
      <LinearGradient
      colors={[ '#00e3ae', '#9be15d' ]}
      locations={[0, 1]}
      style={styles.gradientBtnConfirm}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
      >
        <TouchableOpacity>
           <Text style={styles.buttonConfirmText}>Confirm</Text>
        </TouchableOpacity> 
      </LinearGradient>
    </View>
  )
}
