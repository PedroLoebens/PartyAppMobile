import React from "react";
import { Text, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import { styles } from '../assets/css/style';


export function UploadImage() {
   const pickImage = async () => {
      
      let result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.All,
         allowsEditing: true,
         aspect: [4, 3],
         quality: 1,
      });

      console.log(result);

      if (!result.cancelled) {
         // setImage(result.uri);
      }
   };

   const handleImageSelector = () => {
      Alert.alert(
         "Selecione",
         "De onde você quer pegar a sua imagem?",
         [
            {
               text: "Galeria",
               onPress: () => pickImageFromGalery(),
               style: "default"
            },
            {
               text: "Camera",
               onPress: () => pickImageFromCamera(),
               style: "default"
            }
         ],
         {
            cancelable: true,
            onDismiss: () => console.log("tratar depois")
         }

      )

 

   }
   return (
      <SafeAreaView>
         <Text style={styles.label}>Escolha uma Imagem:</Text>
         <TouchableOpacity style={styles.btnUpload} onPress={() => handleImageSelector()}>
            <Text style={styles.textBtnUpload}><Feather name="upload" size={15} />   Procurar Imagem</Text>

         </TouchableOpacity>
      </SafeAreaView>
   )

}

