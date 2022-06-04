import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from '../../assets/css/style';

export function ButtonBuyTicket(){
   return(
      <View>
         <LinearGradient
         colors={[ '#378B29', '#74D680']}
         locations={[0, 1]}
         style={styles.gradientBtnBuy}
         >
            <TouchableOpacity>
               <Text style={styles.buttonBuyText}>Buy Ticket</Text>
            </TouchableOpacity> 
         </LinearGradient>
      </View>
   )
}
