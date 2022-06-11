import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from '../assets/css/style';

export function ButtonUpload(){
   return(
      <View>
            <TouchableOpacity>
               <Text style={styles.ButtonUpload}>Procurar Imagem</Text>
            </TouchableOpacity> 
      </View>
   )
}
