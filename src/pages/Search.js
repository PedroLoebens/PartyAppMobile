import React, { useState, useEffect } from 'react';
import { Text, View, StatusBar, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonBuyTicket } from '../components/ButtonBuyTicket';
import { Feather } from '@expo/vector-icons';
import config from "../../config/config.json";

import { styles } from '../assets/css/style';

export default function Search() {
  const [search,setSearch]=useState(null);

  //Envia os dados do formulário para o backend
  async function newSearch()
  {
    let resulSearch = await fetch(config.urlRootNode+'search',{
        method: 'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
        },
        body: JSON.stringify({  
          searchEvent: search,
        })
    });
    const ResulResearches=await resulSearch.json();
    setResulResearches(ResulResearches);
  }
  const [ResulResearches,setResulResearches]=useState();


  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor="#ffffff"
          barStyle={"dark-content"}
        />

        <Text style={styles.title}>Buscar</Text>

        <View style={styles.containerInputs}>
            <Text style={styles.label}>Buscar evento:</Text>
            <TextInput style={styles.input} placeholder="Digite o nome do evento" onChangeText={(text)=>setSearch(text)}/>

            <LinearGradient colors={[ '#00e3ae', '#9be15d' ]} locations={[0, 1]} style={styles.gradientBtnConfirm} start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }}>
              <TouchableOpacity onPress={newSearch}>
                 <Text style={styles.buttonConfirmText}>Buscar</Text>
              </TouchableOpacity> 
           </LinearGradient>

           <Text style={styles.subtitle}>Resultados:</Text>

            {ResulResearches?.map((search) => (
            <View style={styles.containerSearchEvents}>
              {/* <Image style={styles.imageEvent} source={require('../assets/images/summer_party.jpg')}/> */}
              <Text style={styles.titleEvent}>{search.name}</Text>
              <Text style={styles.textEvent}><Feather name="map-pin" size={15} />  {search.place}</Text>
              <Text style={styles.textEvent}><Feather name="calendar" size={15} />  {search.date}</Text>
              <Text style={styles.textEvent}><Feather name="dollar-sign" size={15} />  {search.price}</Text>
              <ButtonBuyTicket/>
            </View>
            ))}
          </View>
        </View>
    </ScrollView>
  );
}
