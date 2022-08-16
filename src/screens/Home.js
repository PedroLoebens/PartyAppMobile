import React, { useState, useEffect } from 'react';
import { Text, View, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native';
import { ButtonBuyTicket } from '../components/ButtonBuyTicket';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from "../../config/config.json";

import { styles } from '../assets/css/style';

export default function Home({navigation}) {
  const [Events,setEvents]=useState();
  
  async function loadingEvents()
  {
    let read = await fetch(config.urlRootNode+'read',{
      method: 'GET',
    });
    const Events=await read.json();
    setEvents(Events);
  }

  async function logOut()
  {
    await AsyncStorage.clear();
    navigation.navigate('Login');
  }

  useEffect(()=>{
    loadingEvents();
  },[]);
  
  //Retorna os dados do AsyncStorage
  const [user,setUser]=useState(null);
  useEffect(()=>{
    async function getUser()
    {
        let ress = await AsyncStorage.getItem('userData');
        let data = JSON.parse(ress);
        setUser(data);
    }
    getUser();
  },[]);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor="#ffffff"
          barStyle={"dark-content"}
        />
        
        <Text style={styles.titleHome}>Festas ao redor</Text>
        <Text style={styles.subtitle}>Encontre o melhor para você {user}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.btnUpdate} onPress={loadingEvents}>
            <Text style={styles.textBtnUpdate}><Feather name="refresh-ccw" size={15} />  Atualizar Eventos</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.btnLogOut} onPress={logOut}>
            <Text style={styles.textBtnUpdate}><Feather name="log-out" size={15} />  Sair</Text>
          </TouchableOpacity>
        </View>

        {Events?.map((event) => (
          <View style={styles.containerEvents}>
            {/* <Image style={styles.imageEvent} source={require('../assets/images/summer_party.jpg')}/> */}
            <Text style={styles.titleEvent}>{event.name}</Text>
            <Text style={styles.textEvent}><Feather name="music" size={15} />  {event.musicStyle}</Text>
            <Text style={styles.textEvent}><Feather name="map-pin" size={15} />  {event.place}</Text>
            <Text style={styles.textEvent}><Feather name="calendar" size={15} />  {event.date}</Text>
            <Text style={styles.textEvent}><Feather name="dollar-sign" size={15} />  {event.price}</Text>
            <ButtonBuyTicket/>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
