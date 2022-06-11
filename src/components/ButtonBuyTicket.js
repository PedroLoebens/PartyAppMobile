import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from '../assets/css/style';

export function ButtonBuyTicket(){
   return(
      <View>
         <LinearGradient
         colors={[ '#00e3ae', '#9be15d' ]}
         locations={[0, 1]}
         style={styles.gradientBtnBuy}
         start={{ x: 1, y: 1 }}
         end={{ x: 0, y: 0 }}
         >
            <TouchableOpacity style={styles.buttonBuy}>
               <Text style={styles.buttonBuyText}>Buy Ticket</Text>
            </TouchableOpacity> 
         </LinearGradient>
      </View>
   )
}
