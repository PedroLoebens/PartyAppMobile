import React, { useState } from 'react';
import { Text, View, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, ScrollView, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import config from "../../config/config.json";
import MaskInput, { Masks } from 'react-native-mask-input';
import { Feather } from '@expo/vector-icons';
import { UploadImage } from '../components/PhotoComponent';



import { styles } from '../assets/css/style';

export default function New() {
  const goTop = React.useRef();

  const [name,setName]=useState(null);
  const [place,setPlace]=useState(null);
  const [date,setDate]=useState('');
  const [price,setPrice]=useState(null);
  const [message,setMessage]=useState(null);

  //Envia os dados do formulário para o backend
  async function registerEvent()
  {
    let create = await fetch(config.urlRootNode+'create',{
        method: 'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            nameEvent: name,
            placeEvent: place,
            dateEvent: date,
            priceEvent: price,
            imageEvent: image,
        })
    });
    let ress=await create.json();
    setMessage(ress);

    goTop.current.scrollTo({
      x: 0,
      y: 0,
      animated: true,
    });
  }

  return (
    <ScrollView ref={goTop} style={styles.scrollView}>
      <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <View style={styles.container}>
          <StatusBar
            animated={true}
            backgroundColor="#ffffff"
            barStyle={"dark-content"}
          />

          <Text style={styles.title}>Novo Evento</Text>
          {message && (
              <Text style={styles.message}>{message}</Text>
          )}
          <View style={styles.containerInputs}>
            <Text style={styles.label}>Nome do Evento:</Text>
            <TextInput style={styles.input} placeholder="Digite o nome do evento" onChangeText={(text)=>setName(text)}/>

            <Text style={styles.label}>Local do Evento:</Text>
            <TextInput style={styles.input} placeholder="Digite o local do evento" onChangeText={(text)=>setPlace(text)}/>

            <Text style={styles.label}>Data do Evento:</Text>
            <MaskInput
              style={styles.input} 
              keyboardType="decimal-pad"
              value={date}
              onChangeText={(text)=>setDate(text)}
              mask={Masks.DATE_DDMMYYYY}
            />
            
            

            <Text style={styles.label}>Preço do Ingresso:</Text>
            <MaskInput
              style={styles.input} 
              keyboardType="decimal-pad"
              value={price}
              onChangeText={(text)=>setPrice(text)}
              mask={Masks.BRL_CURRENCY}
            />
            
            <TouchableOpacity>
              <UploadImage />
            </TouchableOpacity>

            <LinearGradient colors={[ '#00e3ae', '#9be15d' ]} locations={[0, 1]} style={styles.gradientBtnConfirm} start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }}>
              <TouchableOpacity onPress={registerEvent}>
                 <Text style={styles.buttonConfirmText}>Confirmar</Text>
              </TouchableOpacity> 
           </LinearGradient>

          </View>
        </View>
      </TouchableWithoutFeedback>
        
    </ScrollView>    
  );
}
