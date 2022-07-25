import React, { useState, useEffect } from 'react';
import { Text, View, StatusBar, ScrollView, TextInput, TouchableOpacity, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from "../../config/config.json";

import { styles } from '../assets/css/style.js';

export default function Login({navigation}) {
  const [name,setName]=useState('');
  const [password,setPassword]=useState(null);

  const [messageError,setMessageError]=useState(null);
  const [display, setDisplay]=useState('none');

  //Envia os dados do formulário para o backend
  async function loginUser()
  {
    let login = await fetch(config.urlRootNode+'login',{
      method: 'POST',
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json',
      },
      body: JSON.stringify({
          nameLogin: name,
          passwordLogin: password
      })
    });
    //Recebe a resposta do servidor e decide se direciona para página home ou mostra mensgem de erro
    let ress = await login.json();

    if (ress === 'Usuário e/ou senha inválidos!') { 
      await AsyncStorage.clear();
      setMessageError(ress);
      
      setDisplay('flex');
      setTimeout(()=>{
          setDisplay('none');
      },5000);

    }else {
      await AsyncStorage.setItem('userData', JSON.stringify(ress));
      await AsyncStorage.getItem('userData');

      navigation.navigate('Home');
    }

    setPassword({
      password: '',
    });  
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor="#ffffff"
          barStyle={"dark-content"}
        />

        <Text style={styles.title}>Login</Text>
        {messageError && ( <Text style={styles.messageError(display)}>{messageError}</Text> )}

        <View style={styles.containerInputs}>
          <Text style={styles.label}>Nome de usuário:</Text>
          <TextInput style={styles.input} placeholder="Digite seu nome de usuário" onChangeText={(text)=>setName(text)}/>

          <Text style={styles.label}>Senha:</Text>
          <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true} onChangeText={(text)=>setPassword(text)} value={password}/>

          <TouchableOpacity style={styles.standardButton} onPress={loginUser}>
            <Text style={styles.standardButtonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('SignUp')}>
           <Text style={styles.textBtnRegister}><Feather name="edit-3" size={15} />  Registre-se</Text>
          </TouchableOpacity> 
        </View>
      </View>
    </ScrollView>
  );
}
