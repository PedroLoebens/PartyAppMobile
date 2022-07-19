import React, { useState, useEffect } from 'react';
import { Text, View, StatusBar, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import config from "../../config/config.json";

import { styles } from '../assets/css/style';

export default function Register()
{
  const [name,setName]=useState(null);
  const [email,setEmail]=useState(null);
  const [password,setPassword]=useState(null);
  const [message,setMessage]=useState(null);

  //Envia os dados do formulário para o backend
  async function signUpUser()
  {
    let signUp = await fetch(config.urlRootNode+'signup',{
      method: 'POST',
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json',
      },
      body: JSON.stringify({
          nameUser: name,
          emailUser: email,
          passwordUser: password
      })
    });
    let ress=await signUp.json();
    setMessage(ress);

    setName({
      name: '',
    });
    setEmail({
      email: '',
    });
    setPassword({
      password: '',
    });    
  }

  return(
    <ScrollView style={styles.scrollView}>
      <View style={styles.containerHeader}>
        <StatusBar
          animated={true}
          backgroundColor="#ffffff"
          barStyle={"dark-content"}
        />

        <Text style={styles.titleSignUp}>Registro</Text>
        {message && ( <Text style={styles.message}>{message}</Text> )}
        
        <View style={styles.containerInputs}>
          <Text style={styles.label}>Nome de usuário:</Text>
          <TextInput style={styles.input} placeholder="Digite um nome de usuário" onChangeText={(text)=>setName(text)} value={name}/>

          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.input} placeholder="Digite um email válido" onChangeText={(text)=>setEmail(text)} value={email}/>

          <Text style={styles.label}>Senha:</Text>
          <TextInput style={styles.input} placeholder="Digite uma senha" secureTextEntry={true} onChangeText={(text)=>setPassword(text)} value={password}/>

          <TouchableOpacity style={styles.standardButton} onPress={signUpUser}>
            <Text style={styles.standardButtonText}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
