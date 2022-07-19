import React, { useState, useEffect } from 'react';
import { Text, View, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, ScrollView, Image} from 'react-native';
import config from "../../config/config.json";
import MaskInput, { Masks } from 'react-native-mask-input';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import { styles } from '../assets/css/style';
import { Button } from 'react-native-paper';

export default function New() {
  const goTop = React.useRef();

  const [name,setName]=useState(null);
  const [place,setPlace]=useState(null);
  const [date,setDate]=useState('');
  const [price,setPrice]=useState(null);
  const [image,setImage]=useState(null);
  // const [base64Image, setBase64Image]=useState('');
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
          // imageEvent: base64Image,
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

    setName({
      name: '',
    });
    setPlace({
      place: '',
    });
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // base64: true,
      allowsEditing: true,
      aspect: [8, 12],
      quality: 1,
    });
    }
    // if(isImageSelector){
    //   return (
    //     <View>
    //       <TouchableOpacity onPress={setImage = (null)}>
    //         <Text style={styles.buttonConfirmText} >Excluir</Text>
    //       </TouchableOpacity>
    //     </View>
    //   )
    // }
  };

 

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
          {message && ( <Text style={styles.message}>{message}</Text> )}

          <View style={styles.containerInputs}>
            <Text style={styles.label}>Nome do Evento:</Text>
            <TextInput style={styles.input} placeholder="Digite o nome do evento" onChangeText={(text)=>setName(text)} value={name}/>

            <Text style={styles.label}>Local do Evento:</Text>
            <TextInput style={styles.input} placeholder="Digite o local do evento" onChangeText={(text)=>setPlace(text)} value={place}/>

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

            <Text style={styles.label}>Escolha uma Imagem:</Text>

            <TouchableOpacity style={styles.btnUpload} onPress={pickImage}>
              <Text style={styles.textBtnUpload}><Feather name="upload" size={15} />  Procurar Imagem</Text>
            </TouchableOpacity>

            {image && <Image onChangeText={(text)=>setImage(text)} source={{ uri: image }} style={styles.imagePreview} />}

            <TouchableOpacity style={styles.standardButtonNew} onPress={registerEvent}>
               <Text style={styles.standardButtonText}>Confirmar</Text>
            </TouchableOpacity> 
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>    
  );
}
