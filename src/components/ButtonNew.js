import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonNew(){
   return(
      <View>
         <LinearGradient
         colors={['#FF00D6', '#FF4D00']}
         locations={[0, 1]}
         style={styles.linearGradient}
         >
          <Feather name="plus" size={20} color={'#ffffff'} />  
         </LinearGradient>
      </View>
   )
}

const styles = StyleSheet.create({
   linearGradient: {
      paddingLeft: 18,
      paddingRight: 18,
      paddingBottom: 5,
      paddingTop: 5,
      borderRadius: 50,
   }
})
