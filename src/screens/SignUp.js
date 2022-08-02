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
  const [messageError,setMessageError]=useState(null);
  const [display, setDisplay]=useState('none');

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
    let ress = await signUp.json();
    if (ress === 2) {
      setMessageError('Nome de usuário e/ou email já cadastrados. Escolha outro!');

      setDisplay('flex');
      setTimeout(()=>{
          setDisplay('none');
      },5000);

    }else {
      setMessage('Usuário cadastrado com sucesso!');

      setDisplay('flex');
      setTimeout(()=>{
          setDisplay('none');
      },5000);
    }

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
        {message && ( <Text style={styles.message(display)}>{message}</Text> )}
        {messageError && ( <Text style={styles.messageError(display)}>{messageError}</Text> )}
        
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
