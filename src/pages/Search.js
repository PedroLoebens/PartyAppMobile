import React from 'react';
import { Text, View, StatusBar, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import { styles } from '../assets/css/style';

export default function Search() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor="#ffffff"
          barStyle={"dark-content"}
        />

        <Text style={styles.title}>Search</Text>

        <View style={styles.containerInputs}>
            <Text style={styles.label}>Pesquisar evento:</Text>
            <TextInput style={styles.input} placeholder="Digite o nome do evento"/>

            <LinearGradient colors={[ '#00e3ae', '#9be15d' ]} locations={[0, 1]} style={styles.gradientBtnConfirm} start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }}>
              <TouchableOpacity>
                 <Text style={styles.buttonConfirmText}>Buscar</Text>
              </TouchableOpacity> 
           </LinearGradient>
          </View>
        </View>
    </ScrollView>
  );
}
